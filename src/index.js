import parseObj from './parsers.js';
import diff from './getDiff.js';
import format from './formatter/format.js';

const getDiff = (fileName1, fileName2, formatName = 'stylish') => {
  const obj1 = parseObj(fileName1);
  const obj2 = parseObj(fileName2);
  const readyDiff = diff(obj1, obj2);
  return format(readyDiff, formatName);
};

export default getDiff;
