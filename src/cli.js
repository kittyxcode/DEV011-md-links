#!/usr/bin/env node

//Cli.js recibe argumentos por consola y los pasa a mdLinks

const mdLinks = require("./mdLinks");

const args = process.argv.slice(2);
const filePath = args[0];
const options = args.slice(1);

console.log("ruta: " + filePath);
console.log("option: " + options);
console.log("args: " + args);

const validate = args.includes("--validate") || args.includes("-v");
const stats = args.includes("--stats") || args.includes("-s");

//validate y stats son verdaderos
//

mdLinks(filePath, validate, stats)
  .then((result) => {
    //toda la logica de acuerdo a que reciba en result
    if (Array.isArray(result)) {
      console.log("Enlaces encontrados:", result);
    }
    if (typeof result === "object" && !Array.isArray(result)) {
      console.log("links: " + result.linksTotales);
      console.log("unique: " + result.linksOk);
      if ("brockers" in result) {
        console.log("brockers: " + result.brockers);
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
