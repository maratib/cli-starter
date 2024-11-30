import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
// import path from 'path';
// import program from 'commander';


clear();

console.log(
    chalk.red(
        figlet.textSync('pizza-cli', { horizontalLayout: 'full' })
    )
);