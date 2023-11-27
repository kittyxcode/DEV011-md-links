const validateUrl = require('../src/validate').validateUrl;

// Mock para la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
  })
);

describe('validateUrl', () => {
  beforeEach(() => {
    // Limpiar los mocks antes de cada prueba
    global.fetch.mockClear();
  });

  it('debería resolver con el estado de respuesta si la solicitud es exitosa', async () => {
    const url = 'test/fileTest.md';
    const result = await validateUrl(url);
    expect(result).toBe(200);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('debería rechazar con el estado de respuesta si la solicitud falla', async () => {
    const url = 'test/fileTest.md';
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      })
    );

    await expect(validateUrl(url)).rejects.toEqual(404);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  test('debería rechazar con el mensaje de error si hay un error en la solicitud', async () => {
    const url = 'http://ejemplo.com';
    const errorMessage = 'Error de red';

    global.fetch.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(validateUrl(url)).rejects.toEqual(errorMessage);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
