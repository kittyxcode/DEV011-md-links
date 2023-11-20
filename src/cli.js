//Cli.js recibe argumentos por consola y los pasa a mdLinks

const mdLinks = require("./mdLinks");

mdLinks("/rutaFalsa/archivoFalso")
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });