import fs from 'fs';
import path from 'path';

export const readFile = (file) => fs.readFileSync(file);

export const getExtension = (fileName) => path.extname(fileName);
