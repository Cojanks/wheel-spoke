#!/usr/bin/env node
const program = require('commander');

const dirCloning = require("../lib/dirCloning");

program
  .command('new')
  .alias('n') 
  .description('Creates a new client in /clients & clones an empty boilerplate client dir using the company name') 
  .action(function () {
    let companyName = process.argv[3];
    if(companyName == undefined) {
      console.log("Please enter a company name. If the name is multi-word, please surround the name with \" \" ");
    } else {
      dirCloning.cloneBoiler(companyName);
    }
  });


program.parse(process.argv);

// any changes should be installed globally using 'sudo npm install -g ./' in the sku-scripts dir