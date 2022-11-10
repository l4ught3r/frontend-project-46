import _ from 'lodash';
import { getPath, getExtension } from './filePath.js';
import { jsonParse, yamlParse } from './parsers.js';

const diff = (obj1, obj2) => {
  const keyArray = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const result = keyArray.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return `${key}: ${diff(obj1[key], obj2[key])}`;
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return `    ${key}: ${obj1[key]}`;
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
  });
  result.unshift('{');
  result.push('}');
  return result.join('\n');
};

const getDiff = (fileName1, fileName2) => {
  const obj1 = getExtension(fileName1) === 'json' ? jsonParse(getPath(fileName1)) : yamlParse(getPath(fileName1));
  const obj2 = getExtension(fileName2) === 'json' ? jsonParse(getPath(fileName2)) : yamlParse(getPath(fileName2));
  return diff(obj1, obj2);
};

export default getDiff;
