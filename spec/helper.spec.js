const helper = require('./../src/helper');

describe('When helper method is started', () => {
  describe('And sum is call', () => {
    it('Then sum return result', () => {
      const a = 5; const b = 10;
    
      expect(helper.sum(a, b)).toEqual(15);
    });
  });

  describe('And randomAbove3 method', () => {
    const x = 5;

    it('Then randomAbove3 returns a number greater than "3"', () => {
      expect(helper.randomAbove3()).toBeGreaterThan(x);
    });
  });

  describe('And returnTrue method', () => {
    it('Then returnTrue is true', () => {
      expect(helper.returnTrue()).toBeTruthy();
    });
  });

  describe('And returnFalse method', () => {
    it('Then returnFalse is false', () => {
      expect(helper.returnFalse()).toBeFalsy();
    });
  });

  describe('And returnUndefined method', () => {
    it('Then returnUndefined is undefined', () => {
      expect(helper.returnUndefined()).toBeUndefined();
    });
  });

  describe('And builder method', () => {
    it('Then  builder return the Object', () => {
      expect(helper.builder()).toMatchObject({ 
        birth: "01-01-1980", 
        name: "Joao", 
        surname: "Silva"
      });
    });
  });

  describe('And merger method', () => {
    const obj = {
      birth: "01-01-2000", 
      name: "Nicolly", 
      surname: "Carias"
    }

    it('Then merger return "obj"', () => {
      expect(helper.merger(obj)).toEqual(expect.objectContaining(obj));
    });
  });

  describe('And concatRandomString method', () => {
    const text = "text";  

    it('Then concatRandomString return "text+number"', () => {
      expect(helper.concatRandomString(text)).toMatch(/text\d+/);
    });
  });

  describe('And concatRandomArray method', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];

    it('Then concatRandomArray to equal array', () => {
      expect(helper.concatRandomArray(array)).toEqual(expect.arrayContaining(array));
    });
  });

  describe('And thrower method', () => {
    it('Then thrower to throw', () => {
      expect(helper.thrower).toThrow();
    });
  });

  describe('And thrower2 method', () => {
    it('Then thrower2 to throw error ', () => {
      expect(helper.thrower2).toThrowError();
    });
  });
});
