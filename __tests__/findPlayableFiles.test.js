import findPlayableFiles from '../src/findPlayableFiles';
import isPlayableFileComparator from '../src/isPlayableFileComparator';

const recursive = require('recursive-readdir');
jest.mock('recursive-readdir');

describe('The `findPlayableFiles` module', () => {
  it('should call `recursive-readdir` with the expected arguments', () => {
    const mockResults = Promise.resolve(['iloveamerica', 'ikissedamerica']);
    recursive.mockReturnValueOnce(mockResults);
    const specifiedSearchPath = "/Users/burnindownthehouse";

    expect(findPlayableFiles(specifiedSearchPath)).toMatchObject(mockResults);
    expect(recursive).toHaveBeenCalledWith(specifiedSearchPath, [ isPlayableFileComparator ]);
  });
});
