import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

import { expect } from '@jest/globals';
import getDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['json', 'stylish'],
  ['json', 'plain'],
  ['json', 'json'],
  ['yaml', 'stylish'],
  ['yaml', 'plain'],
  ['yaml', 'json'],
])('%s files in %s format', (fileExtension, format) => {
  const filePath1 = getFixturePath(`file1.${fileExtension}`);
  const filePath2 = getFixturePath(`file2.${fileExtension}`);
  const expected = readFile(`${format}.txt`);
  const result = getDiff(filePath1, filePath2, format);
  expect(result).toEqual(expected.trim());
});
