const {sum, myRemove, myFizzBuzz} = require('./sum');

describe ('sum', ()=> {
  it('O retorno de sum (4, 5) é 9?', ()=> {
    expect(sum(4, 5)).toBe(9);
  });
  it('O retorno de sum (0, 0) é 0?', ()=> {
    expect(sum(0, 0)).toBe(0);
  });
  it('teste se a funcao sum lanca um erro quando os parametros sào 4 e "5"', ()=>{
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
     
});

describe ('Funcao myRemove', ()=>{
  it('myRemove está retonando o array esperado?', ()=>{
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  });
  it('myRemove não está retornandoo array [1, 2, 3, 4]?', ()=>{
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  it('myRemove está retornando o resultado correto?', ()=>{
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

describe ('Funcao myFizzBuzz(num)', ()=> {
  it('Um número divisível por 3 e 5 retorna "fizzbuzz"?', ()=>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz('2')).toBe(false);
  })
  
  
})
