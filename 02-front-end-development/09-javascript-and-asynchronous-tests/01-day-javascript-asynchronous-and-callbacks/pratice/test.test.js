// const uppercase = (str, callback) => {
//     setTimeout(() => {
//       callback(str.toUpperCase());
//     }, 5000);
//   };

//   describe('teste', () => {
//     it('Escreva um teste que verifique a chamada da callback de uma função uppercase', (done) => {
//         uppercase('palavrão', (string) => {
//             try {
//                 expect(string).toBe('PALAVRÃO');
//                 done();
//             } catch (error) {
//                 done(error);
//             }
//         });
//     });
//   });

//   // Copiar
// // Verifique se a importação do arquivo correto está sendo feita.


const { getPokemonDetails } = require("./script");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokemon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokemon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});