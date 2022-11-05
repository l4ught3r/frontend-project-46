import fs from 'fs';

const jsonParse = (filePath) => JSON.parse(fs.readFileSync(filePath));

export default jsonParse;
