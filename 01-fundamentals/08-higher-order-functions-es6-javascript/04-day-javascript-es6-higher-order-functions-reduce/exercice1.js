const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  // 1 - Dada uma matriz, transforme em um array.

  function flatten(array) {
    
    return array.reduce(((acc, curr) => acc.concat(curr)), [])
  }

  console.log(flatten(arrays));
  // console.log([1, 2, 4].concat(['a', 'b']));
