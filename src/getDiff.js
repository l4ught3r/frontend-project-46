import _ from 'lodash';

const diff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort((a, b) => a - b);
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
export default diff;
