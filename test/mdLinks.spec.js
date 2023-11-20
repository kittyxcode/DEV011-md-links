const mdLinks = require("../src/mdLinks");

describe("mdLinks", () => {
  it("should...", () => {
    console.log("FIX ME!");
  });
});

describe('mdLinks', () => {
  it('debe devolver una promesa', () => {
    expect(mdLinks('./README.md')).toBeInstanceOf(Promise);
  });
});

describe("mdLinks", () => {
  it("debe rechazar cuando la ruta no existe", () => {
    return mdLinks("rutaFalsa/archivoFalso.md").catch((error) => {
      expect(error).toBe("La ruta no existe");
    });
  });
});

