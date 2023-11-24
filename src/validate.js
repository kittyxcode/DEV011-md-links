//este archivo contiene la funcion para validar links

const validateUrl = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            resolve(response.status); // resuelve con el código de estado si es exitoso
          } else {
            reject(response.status); // rechaza con el código de estado si no es exitoso
          }
        })
        .catch((error) => {
          reject(error.message); // rechaza con el mensaje de error si hay un error en la solicitud
        });
    });
  };
  
  validateUrl("https://www.nintendo.com")
    .then((status) => {
      console.log("La URL es válida con código de estado:", status);
    })
    .catch((error) => {
      console.error("Error al verificar la URL:", error);
    });
  
