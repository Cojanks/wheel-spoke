#!/usr/bin/env node
const program = require('commander');

const dirCloning = require("../lib/dirCloning");

// Examples and testing --------------------------
program
  .command('test') // sub-command name
  .alias('tst') // alternative sub-command
  .description('Test command/example which takes an input and then displays it') // command description
  // function to execute when this command is uses
  .action(function () {
    let companyName = process.argv[3]; // ensure that the company name is wrapped in quotes 
    console.log("CLI command: 'test'");
    dirCloning.cloneBoiler(companyName);
  });


program.parse(process.argv);

// any changes should be installed globally using 'sudo npm install -g ./' in the sku-scripts dir