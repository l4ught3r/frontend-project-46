import yaml from 'js-yaml';
import { getExtension, getPath } from './filePath.js';

const parseFile = (filePath) => {
  switch (getExtension(filePath)) {
    case 'json':
      return JSON.parse(getPath(filePath));
    case 'yml':
      return yaml.load(getPath(filePath), 'utf8');
    default:
      throw new Error(`Unknown format: ${getExtension(filePath)}`);
  }
};

export default parseFile;
