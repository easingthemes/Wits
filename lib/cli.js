#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();

const initCommand = require('../command/init.js');
const startCommand = require('../command/start.js');
const watchCommand = require('../command/watch.js');
const watchHelper = require('../lib/watchHelper.js');

process.on('SIGINT', () => {
    console.log(`Exit Wits............`);
    watchHelper.closeSocketServer();
    process.exit(0);
});

program.option('-i, --init', 'Create a wits config file for running Wits');
program.option('-s, --start', 'Start and Use Wits service');
program.option('-w, --watch', 'Watch project for live reloading');

program.parse(process.argv);

if (program.init) {
    initCommand.run();
} else if (program.start) {
    startCommand.run();
} else if (program.watch) {
    watchCommand.run();
} else {
    program.help();
}