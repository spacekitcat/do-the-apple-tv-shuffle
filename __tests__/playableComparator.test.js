import playableComparator from '../src/playableComparator';

describe('The `playableComparator` module', () => {
  it('should return `true` for files without an extension', () => {
    const specifiedFile = '/Users/iloveamerica';
    const specifiedFileStat = { isDirectory: () => false };

    expect(playableComparator(specifiedFile, specifiedFileStat)).toBe(true);
  });

  it('should return `false` for files ending in `.mp4`', () => {
    const specifiedFile = '/Users/iloveamerica.mp4';
    const specifiedFileStat = { isDirectory: () => false };

    expect(playableComparator(specifiedFile, specifiedFileStat)).toBe(false);
  });

  it('should return `true` for folders', () => {
    const specifiedFile = '/Users/iloveamerica.mp4';
    const specifiedFileStat = { isDirectory: () => true };

    expect(playableComparator(specifiedFile, specifiedFileStat)).toBe(false);
  });
});
