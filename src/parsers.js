import fs from 'fs';
import yaml from 'js-yaml';

export const jsonParse = (filePath) => JSON.parse(fs.readFileSync(filePath));
export const yamlParse = (filePath) => yaml.load(fs.readFileSync(filePath), 'utf8');
