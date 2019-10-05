import isPlayableFileComparator from '../src/isPlayableFileComparator';

describe('The `findPlayableFiles` module', () => {
  it('should return `false` for files without an extension', () => {
    const specifiedFile = '/Users/iloveamerica';
    const specifiedFileStat = {};

    expect(isPlayableFileComparator(specifiedFile, specifiedFileStat)).toBe(true);
  });

  it('should return `true` for files ending in `.mp4`', () => {
    const specifiedFile = '/Users/iloveamerica.mp4';
    const specifiedFileStat = {};

    expect(isPlayableFileComparator(specifiedFile, specifiedFileStat)).toBe(false);
  });
});
