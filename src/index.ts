#!/usr/bin/env node
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
// import path from 'path';
// import program from 'commander';


clear();

console.log(
    chalk.red(
        figlet.textSync('my-cli', { horizontalLayout: 'full' })
    )
);

console.log("Hello CLI World");

export function addition(a: number, b: number): number {
    return a + b;
}