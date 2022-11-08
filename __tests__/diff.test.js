import getDiff from '../src/diff.js';

test('getDiff json', () => {
  expect(getDiff('./__fixtures__/file1.json', './__fixtures__/file2.json'))
    .toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});

test('getDiff yaml', () => {
  expect(getDiff('./__fixtures__/file3.yaml', './__fixtures__/file4.yaml'))
    .toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
