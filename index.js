const inquirer = require("inquirer");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const dist_directory = path.resolve(__dirname, 'dist');
const distpath = path.join(dist_directory, 'team.html');
const fs = require("fs");
const path = require('path');
const generateHtml = require('./src/template.HTML');
const pageArray = [];




