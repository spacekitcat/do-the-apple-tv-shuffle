import findPlayableFiles from '../src/findPlayableFiles';

describe('The `findPlayableFiles` module', () => {
  it('should have the value `null`', () => {
    expect(findPlayableFiles()).toBeNull();
  });
});
