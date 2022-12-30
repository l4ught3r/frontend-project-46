import yaml from 'js-yaml';

const parseData = (data, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data, 'utf8');
    case '.yaml':
      return yaml.load(data, 'utf8');
    default:
      throw new Error(`Unknown format: ${extension}`);
  }
};

export default parseData;
