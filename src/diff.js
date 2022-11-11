import _ from 'lodash';
import { getPath, getExtension } from './filePath.js';
import { jsonParse, yamlParse } from './parsers.js';

const diff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const result = keys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { key, children: diff(obj1[key], obj2[key]), type: 'nested' };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { key, value: obj2[key], type: 'added' };
    }
    if (!Object.hasOwn(obj2, key)) {
      return { key, value: obj1[key], type: 'deleted' };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key, valueBefore: obj1[key], valueAfter: obj2[key], type: 'changed',
      };
    }
    return { key, value: obj1[key], type: 'unchanged' };
  });
  return result;
};

const getDiff = (fileName1, fileName2) => {
  const obj1 = getExtension(fileName1) === 'json' ? jsonParse(getPath(fileName1)) : yamlParse(getPath(fileName1));
  const obj2 = getExtension(fileName2) === 'json' ? jsonParse(getPath(fileName2)) : yamlParse(getPath(fileName2));
  return diff(obj1, obj2);
};

export default getDiff;
