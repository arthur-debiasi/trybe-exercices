const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
//   🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

  function containsA() {
    const upperA = names.reduce(((acc, curr) => acc += curr.includes('A') ? 1 : 0), 0)
    const lowerA = names.reduce(((acc, curr) => acc += curr.includes('A') ? 1 : 0), 0)

  }

  console.log(containsA());