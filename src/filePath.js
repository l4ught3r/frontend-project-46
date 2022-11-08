import path from 'path';

export const getPath = (file) => path.resolve(file);

export const getExtension = (fileName) => {
  if (fileName.endsWith('.json')) {
    return 'json';
  }
  if (fileName.endsWith('.yaml') || fileName.endsWith('.yml')) {
    return 'yml';
  }
  return '';
};
