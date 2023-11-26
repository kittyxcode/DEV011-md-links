const fs = require("fs"); //file system de node

//Esta archivo es para tener funciones para usar en mdLinks

//retorna true si existe la ruta y false sino
const existsPath = (filePath) => {
  return fs.existsSync(filePath);
};

//retorna true si la ruta es absoluta y false sino
const isAbsolute = (filePath) => {
  return fs.isAbsolute(filePath);
};

//retorna true si coincide con alguna de las extensiones, sino false
const extensionValidate = (filePath) => {
  const extensiones = [
    ".md",
    ".mkd",
    ".mdwn",
    ".mdown",
    ".mdtxt",
    ".mdtext",
    ".markdown",
    ".text",
  ];
  return extensiones.includes(path.extname(filePath));
};

module.exports = {
  existsPath,
  isAbsolute,
  extensionValidate
};
