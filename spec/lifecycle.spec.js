beforeAll(() => {
  console.log('Now i print number 300!');
});

beforeEach(() => {
  console.log('Now i print number 600!');
});

afterEach(() => {
  console.log('Now i print number 1200!');
});

afterAll(() => {
  console.log('Now i print number 1500!');
});

describe('Given', () => {
  console.log('Now i print number 100');

  beforeAll(() => {
    console.log('Now i print number 400!');
  });

  beforeEach(() => {
    console.log('Now i print number 700!');
  });

  afterEach(() => {
    console.log('Now i print number 1100!');
  });

  afterAll(() => {
    console.log('Now i print number 1400!');
  });

  describe('When', () => {
    console.log('Now i print number 200!');

    beforeAll(() => {
      console.log('Now i print number 500!');
    });

    beforeEach(() => {
      console.log('Now i print number 800!');
    });

    afterEach(() => {
      console.log('Now i print number 1000!');
    });

    afterAll(() => {
      console.log('Now i print number 1300!');
    });
    
    it('Then', () => {
      console.log('Now i print number 900!');
    });
  });
});