const fs = require("fs"); //file system de node

//crear fuincion mdLinks
const mdLinks = (filePath, options) => {
  return new Promise((resolve, reject) => {
    //verificar que la ruta existe
    //sino existe la ruta rechaza la promesa
    if (fs.existsSync(filePath)) {
      //convertir a ruta absoluta
      

      //probar si ruta absoluta es archivo o directorio
      //si es un directorio filtrar archivos .md
      //si es un archivo extraer array de links

    } else {
      reject("La ruta no existe");
    }
  });
};

module.exports = mdLinks;
