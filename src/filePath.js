import fs from 'fs';
import path from 'path';

export const getPath = (file) => fs.readFileSync(file);

export const getExtension = (fileName) => path.extname(fileName).slice(1);
