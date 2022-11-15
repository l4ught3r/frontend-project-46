import { getExtension, getPath } from './filePath.js';
import { jsonParse, yamlParse } from './parsers.js';
import diff from './diff.js';
import format from './formatter/index.js';

const getDiff = (fileName1, fileName2, formatName = 'stylish') => {
  const obj1 = getExtension(fileName1) === 'json' ? jsonParse(getPath(fileName1)) : yamlParse(getPath(fileName1));
  const obj2 = getExtension(fileName2) === 'json' ? jsonParse(getPath(fileName2)) : yamlParse(getPath(fileName2));
  const readyDiff = diff(obj1, obj2);
  return format(readyDiff, formatName);
};

export default getDiff;
