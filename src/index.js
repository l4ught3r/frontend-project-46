import parseData from './parsers.js';
import getDiff from './getDiff.js';
import format from './formatter/format.js';
import { getExtension, readFile } from './filePath.js';

const genDiff = (fileName1, fileName2, formatName = 'stylish') => {
  const obj1 = readFile(fileName1);
  const obj2 = readFile(fileName2);
  const extension = getExtension(fileName1);
  const parseObj1 = parseData(obj1, extension);
  const parseObj2 = parseData(obj2, extension);
  const readyDiff = getDiff(parseObj1, parseObj2);
  return format(readyDiff, formatName);
};

export default genDiff;
