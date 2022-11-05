import fs from 'fs';

export const jsonParse = (filePath) => JSON.parse(fs.readFileSync(filePath));
