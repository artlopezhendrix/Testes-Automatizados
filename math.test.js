const { add, subtract, multiply, divide } = require('../math');

describe('Testes da biblioteca math', () => {
  test('Soma de 2 + 3 deve ser 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('Subtração de 5 - 2 deve ser 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('Multiplicação de 4 x 3 deve ser 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('Divisão de 10 por 2 deve ser 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('Deve lançar erro ao dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow("Divisão por zero não é permitida.");
  });
});