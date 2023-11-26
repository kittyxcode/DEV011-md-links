const fs = require("fs"); //file system de node
const path = require("path"); // para verificar rutas
const marked = require("marked").parse;

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

/* extrae los links, 
si el validate es true retorna:
    href: URL encontrada.
    text: Texto que aparecía dentro del link.
    file: Ruta del archivo donde se encontró el link.
    status: Código de respuesta HTTP.
    ok: Mensaje fail en caso de fallo u ok en caso de éxito. 
si es false o undefined
    href: URL encontrada.
    text: Texto que aparecía dentro del link (<a>).
    file: Ruta del archivo donde se encontró el link.  */
const extractLinks = (filePath, validate) => {
    if (!validate) {
        const content = readFile(filePath);
        const links = [];
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => {
          links.push({ href, text, title });
        };
        marked(content, { renderer });
        return links;
    }
    else{
        const content = readFile(filePath);
        const links = [];
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text, status, ok) => {
          links.push({ href, text, title, status, ok });
        };
        marked(content, { renderer });
        return links;
    }

};

module.exports = {
  existsPath,
  isAbsolute,
  resolve,
  extensionValidate,
  readFile,
  extractLinks
};
