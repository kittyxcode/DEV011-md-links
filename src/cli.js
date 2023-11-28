#!/usr/bin/env node

//Cli.js recibe argumentos por consola y los pasa a mdLinks

const mdLinks = require("./mdLinks");

const args = process.argv.slice(2);
const filePath = args[0];
const options = args.slice(1);

console.log("ruta: " + filePath);
console.log("option: " + options);
console.log("args: " + args);

mdLinks("/Users/kathzy/Documents/Codes/DEV011-md-links/test/fileTest.md")
  .then((links) => {
    console.log("Enlaces encontrados:", links);
  })
  .catch((error) => {
    console.log(error);
  });
