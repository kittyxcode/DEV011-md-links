const fs = require("fs");
const path = require("path"); //file system de node

//Esta archivo es para tener funciones para usar en mdLinks

//retorna true si existe la ruta y false sino
const existsPath = (filePath) => {
  return fs.existsSync(filePath);
};

//retorna true si la ruta es absoluta y false sino
const isAbsolute = (filePath) => {
  return path.isAbsolute(filePath);
};

//retorna true si coincide con alguna de las extensiones, sino false
const extensionValidate = (filePath) => {
  const extensions = [
    ".md",
    ".mkd",
    ".mdwn",
    ".mdown",
    ".mdtxt",
    ".mdtext",
    ".markdown",
    ".text",
  ];
  return extensions.includes(path.extname(filePath));
};

const readFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    console.error(`Error al leer el archivo: ${error.message}`);
  }
};

module.exports = {
  existsPath,
  isAbsolute,
  extensionValidate,
  readFile
};
