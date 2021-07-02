import {operation} from '../src/data.js';


describe('operation', () => {
  it('should be an object', () => {
    expect(typeof operation).toBe('object');
  });

  describe('operation.search', () => {
    it('should be an function', () => {
      expect(typeof operation.search).toBe('function');
    });

 /* it.skip('debería retornar true para "4083952015263"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar true para "79927398713"', () => {
      // escribe aquí tu test
    });

    it.skip('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
    }); */
  });


  describe('operation.clickedPokemonProfileDisplay', () => {
    it('should be an function', () => {
      expect(typeof operation.clickedPokemonProfileDisplay).toBe('function');
    });

  /*it.skip('Debería retornar "############5616" para "4556364607935616"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "1" para "1"', () => {
      // escribe aquí tu test
    });

    it.skip('Debería retornar "######orld" para "helloworld"', () => {
      // escribe aquí tu test
    }); */
  });
});



