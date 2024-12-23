describe("exec order", () => {
  before(() => console.log(1));
  before(() => console.log(2));
  after(() => console.log(6));
  beforeEach(() => console.log(3));
  afterEach(() => console.log(5));
  it("should work", () => console.log(4));
});
