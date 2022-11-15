import formattingStylish from './stylish.js';

const formatters = {
  stylish: formattingStylish,
};
const format = (diff, formatName) => formatters[formatName](diff);

export default format;
