
describe('Given concat method', () => {
    describe('When forEach concat method is called', () => {
      const testsMethod = [
        { testConcat: [].concat(['first', 'second']).concat(['last']), result: ['first', 'second', 'last'] },
        { testConcat: [].concat(['one', 'two']).concat(['three']), result: ['one', 'two', 'three'] },
        { testConcat: [].concat([1, 2]).concat([3]), result: [1, 2, 3] },
        { testConcat: [].concat([2, 3]).concat([5]), result: [2, 3, 5] },
        { testConcat: [].concat([1, 1]).concat([2]), result: [1, 1, 2] },
      ];

      it('Then forEach concat method', () => {
        testsMethod.forEach(test => {
          expect(test.testConcat).toEqual(test.result);
        });
      });
    });
  });