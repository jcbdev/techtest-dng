#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import colorize from 'json-colorizer';
import { program } from 'commander';
import { countDuplicates } from './count-duplicates';

const main = async (argv: string[]) => {
  if (!process.argv.includes('-nb') && !process.argv.includes('--no-banner'))
    console.log(chalk.blueBright(figlet.textSync('D&G TechTest')));

  const cmd = program
  .option("-i, --ignore-case", "Ignore case of the input string")
  .option("-w, --ignore-whitespace", "Ignore whitespace of the input string")
  .option("-nb, --no-banner", "Suppress banner")
  .arguments('<input...>')
    .usage('dng-test [options] <input...>')
    .version('0.0.1')
    .description("CLI to count the duplicate letters in an input string", {
      string: 'The string to count the duplicate letters in'
    })
    .action((input, options, command) => {
      const duplicates = countDuplicates(input.join(' '), options.ignoreCase, options.ignoreWhitespace);
      console.log(colorize(JSON.stringify(duplicates, null, 2)));
    });

  const NO_COMMAND_SPECIFIED = process.argv.length == 2;
  // Handle it however you like
  if (NO_COMMAND_SPECIFIED) {
    // e.g. display usage
    program.help();
  }
  
  cmd.parse(argv);
  
}

main(process.argv).then(() => {
  process.exit();
});