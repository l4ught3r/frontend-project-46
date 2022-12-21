import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import getDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('flat structures json', () => {
  expect(getDiff('./__fixtures__/flat-structures1.json', './__fixtures__/flat-structures2.json'))
    .toBe(readFile('flat-structures.txt'));
});

test('flat stuctures yaml', () => {
  expect(getDiff('./__fixtures__/flat-structures1.yaml', './__fixtures__/flat-structures2.yaml'))
    .toEqual(readFile('flat-structures.txt'));
});

test('stylish json', () => {
  expect(getDiff('./__fixtures__/nested-structures1.json', './__fixtures__/nested-structures2.json'))
    .toBe(readFile('nested-structures-stylish.txt'));
});

test('stylish yaml', () => {
  expect(getDiff('./__fixtures__/nested-structures1.yaml', './__fixtures__/nested-structures2.yaml'))
    .toBe(readFile('nested-structures-stylish.txt'));
});

test('plain json', () => {
  expect(getDiff('./__fixtures__/nested-structures1.json', './__fixtures__/nested-structures2.json', 'plain'))
    .toBe(readFile('plain-result.txt'));
});

test('plain yaml', () => {
  expect(getDiff('./__fixtures__/nested-structures1.yaml', './__fixtures__/nested-structures2.yaml', 'plain'))
    .toBe(readFile('plain-result.txt'));
});

test('json json', () => {
  expect(getDiff('./__fixtures__/nested-structures1.json', './__fixtures__/nested-structures2.json', 'json'))
    .toBe(readFile('json-result.txt'));
});

test('json yaml', () => {
  expect(getDiff('./__fixtures__/nested-structures1.yaml', './__fixtures__/nested-structures2.yaml', 'json'))
    .toBe(readFile('json-result.txt'));
});
