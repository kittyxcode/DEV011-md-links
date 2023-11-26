const fs = require("fs"); //file system de node
const path = require("path"); // para verificar rutas

//Esta archivo es para tener funciones para usar en mdLinks

//retorna true si existe la ruta y false sino
const existsPath = (filePath) => {
  return fs.existsSync(filePath);
};

//retorna true si la ruta es absoluta y false sino
const isAbsolute = (filePath) => {
  return path.isAbsolute(filePath);
};

//convierte a relativa la ruta
const resolve = (filePath) => {
  return path.resolve(filePath);
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

//lee el archivo si funciona devuleve el obj buffer, sino maneja el error
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
  resolve,
  extensionValidate,
  readFile,
};
