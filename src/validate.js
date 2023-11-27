//este archivo contiene la funcion para validar links

const validateUrl = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          resolve(response.status);
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

module.exports = { validateUrl };

