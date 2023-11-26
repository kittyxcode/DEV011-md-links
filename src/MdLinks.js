const marked = require("marked").parse; //para encontrar links
const functionsPath = require("./functionsPaths");//funciones fs y path

// crear función mdLinks
const mdLinks = (filePath, validate) => {
  return new Promise((resolve, reject) => {
    console.log("Inicio de la función mdLinks");

    //verifica si la ruta existe
    if (functionsPath.existsPath(filePath)) {
      console.log("La ruta existe");

      //verifica si la ruta es absoluta
      if (!functionsPath.isAbsolute(filePath)) {
        console.log("La ruta no es absoluta, convirtiendo a absoluta");
        filePath = functionsPath.resolve(filePath);
      }

      //verifica extensiones del archivo
      if (functionsPath.extensionValidate(filePath)) {
        console.log("La extensión es correcta");

        //lee archivo .md
        const content = functionsPath.readFile(filePath);

        //imprimo el contenido, esto lo tengo que comentar...
        console.log("Contenido del archivo:", content);

        /* //crear array e ir guardando los enlaces encontrados
        const links = [];
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => {
          links.push({ href, text, title });
        };

        // utilizar específicamente el método parse de marked
        const htmlContent = marked(content, { renderer });
        //console.log("Contenido HTML:", htmlContent); */
        resolve(functionsPath.extractLinks(filePath, true));
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
