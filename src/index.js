import parseData from './parsers.js';
import getDiff from './getDiff.js';
import format from './formatter/format.js';
import { getExtension, readFile } from './filePath.js';

const genDiff = (fileName1, fileName2, formatName = 'stylish') => {
  const obj1 = parseData(readFile(fileName1), getExtension(fileName1));
  const obj2 = parseData(readFile(fileName2), getExtension(fileName2));
  const readyDiff = getDiff(obj1, obj2);
  return format(readyDiff, formatName);
};

export default genDiff;
