#!/usr/bin/env node
import { program } from 'commander';
import getDiff from '../src/getDiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format <type>', 'output format', 'stylish')
  .arguments('<filePath1> <filePath2>')
  .action((filePath1, filePath2, option) => {
    console.log(getDiff(filePath1, filePath2, option.format));
  });

program.parse();
