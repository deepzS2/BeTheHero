const generateUniqueId = require('../../src/utils/generatUniqueId');

describe('Generate Unique ID', () => {
  it('Should generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  })
});