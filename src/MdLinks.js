const fs = require("fs"); //file system de node

//crear fuincion mdLinks
const mdLinks = (filePath, options) => {
  return new Promise((resolve, reject) => {
    //verificar que la ruta existe
    //sino existe la ruta rechaza la promesa
    if (fs.existsSync(filePath)) {
    } else {
      reject("La ruta no existe");
    }
  });
};

module.exports = mdLinks;
