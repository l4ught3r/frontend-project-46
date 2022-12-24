import fs from 'fs';
import yaml from 'js-yaml';
import { getExtension } from './filePath.js';

const parseFile = (filePath) => {
  switch (getExtension(filePath)) {
    case 'json':
      return JSON.parse(fs.readFileSync(filePath));
    case 'yml' || 'yaml':
      return yaml.load(fs.readFileSync(filePath), 'utf8');
    default:
      throw new Error(`Unknown format: ${getExtension(filePath)}`);
  }
};

export default parseFile;
