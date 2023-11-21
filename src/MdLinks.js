const fs = require("fs"); //file system de node
const path = require('path');// para evaluar rutas y demas

let extensiones=['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text']

//crear fuincion mdLinks
const mdLinks = (filePath, options) => {
  return new Promise((resolve, reject) => {
    //verificar que la ruta existe
    //sino existe la ruta rechaza la promesa
    if (fs.existsSync(filePath)) {
      //si la ruta no es absoluta la vuelve absoluta
      if(!path.isAbsolute(filePath)){
        path.resolve(filePath);
      }
      //evalua la extencion
      if(extensiones.includes(path.extname(filePath)))
      {
        //leer archivo
        const content = fs.readFileSync(filePath, 'utf8');
      }
      else{
        //si es un directorio filtrar archivos .md
        //si es un archivo extraer array de links
        reject('la extension no es correcta')
      }


      

      //probar si ruta absoluta es archivo o directorio
      //si es un directorio filtrar archivos .md
      //si es un archivo extraer array de links

    } else {
      reject("La ruta no existe");
    }
  });
};

module.exports = mdLinks;
