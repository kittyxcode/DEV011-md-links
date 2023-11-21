//Cli.js recibe argumentos por consola y los pasa a mdLinks

const mdLinks = require("./mdLinks");

mdLinks("/Users/kathzy/Documents/Codes/DEV011-md-links/test/fileTest.md")
  .then((links) => {
    console.log("Enlaces encontrados:", links);
  })
  .catch((error) => {
    console.log(error);
  });
