// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

test('o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
})
test('o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
})

// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)

test('a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(() => {sum(4, '5')}).toThrow();
    expect(() => {sum(4, '5')}).toThrow('The parameters must be numbers');
})