const isDuck = require('./../src/duckClassifier');

describe('When isDuck method is started', () => {
  it('Then isDuck return true', () => {
    const fly = true; const walk = true; const swim = true;

    expect(isDuck(fly, walk, swim)).toBe(true);
  });

  it('Then parameter fly is true, return false', () => {
    const fly = true; const walk = false; const swim = false;

    expect(isDuck(fly, walk, swim)).toBe(false);
  });

  it('Then parameter walk is true, return false', () => {
    const fly  = false; const walk = true; const swim = false;

    expect(isDuck(fly, walk, swim)).toBe(false);
  });

  it('Then parameter swim is true, return false', () => {
    const fly  = false; const walk = false; const swim = true;

    expect(isDuck(fly, walk, swim)).toBe(false);
  });

  it('Then parameter swim is true and fly is fly, return false', () => {
    const fly  = true; const walk = true; const swim = false;

    expect(isDuck(fly, walk, swim)).toBe(false);
  });
});
