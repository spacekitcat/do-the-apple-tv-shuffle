import randomWrapper from '../src/randomWrapper';

describe('The `randomWrapper` module', () => {
  it('generate a number between 0 and 1', () => {
    const result = randomWrapper(0, 1);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it('generate a number between 0 and 100', () => {
    const result = randomWrapper(0, 100);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('generate a number between 100 and 101', () => {
    const result = randomWrapper(100, 101);
    expect(result).toBeGreaterThanOrEqual(100);
    expect(result).toBeLessThanOrEqual(101);
  });

  it('generate a number between 100 and 101', () => {
    const result = randomWrapper(100, 200);
    expect(result).toBeGreaterThanOrEqual(100);
    expect(result).toBeLessThanOrEqual(200);
  });
});