const meuObjeto = {
    nome: 'Rafael',
    idade: 10,
    cidade: 'Itacaré'
  };
  
  // Iterando sobre os valores do objeto usando um loop for...of
  for (const valor of Object.values(meuObjeto)) {
    console.log(valor);
  }
  