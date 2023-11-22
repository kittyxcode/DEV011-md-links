const fs = require("fs");//file system de node
const path = require("path");// para verificar rutas
const marked = require('marked').parse; //para encontrar links

let extensiones = [
  ".md",
  ".mkd",
  ".mdwn",
  ".mdown",
  ".mdtxt",
  ".mdtext",
  ".markdown",
  ".text",
];

// crear función mdLinks
const mdLinks = (filePath, options) => {
  return new Promise((resolve, reject) => {
    console.log("Inicio de la función mdLinks");

    //verifica si la ruta existe
    if (fs.existsSync(filePath)) {
      console.log("La ruta existe");

      //verifica si la ruta es absoluta
      if (!path.isAbsolute(filePath)) {
        console.log("La ruta no es absoluta, convirtiendo a absoluta");
        filePath = path.resolve(filePath);
      }

      //verifica extensiones del archivo
      if (extensiones.includes(path.extname(filePath))) {
        console.log("La extensión es correcta");

        //lee archivo .md
        const content = fs.readFileSync(filePath, "utf8");

        //imprimo el contenido, esto lo tengo que comentar...
        console.log("Contenido del archivo:", content);


        //crear array e ir guardando los enlaces encontrados
        const links = [];
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => {
          links.push({ href, text, title });
        };

        // utilizar específicamente el método parse de marked
        const htmlContent = marked(content, { renderer });
        //console.log("Contenido HTML:", htmlContent);
        resolve(links);
      } else {
        console.log("La extensión no es correcta");
        reject("la extension no es correcta");
      }
    } else {
      console.log("La ruta no existe");
      reject("La ruta no existe");
    }
  });
};

module.exports = mdLinks;



