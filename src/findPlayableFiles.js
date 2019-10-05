import recursive from 'recursive-readdir';
import isPlayableFileComparator from './isPlayableFileComparator';

export default specifiedSearchPath => {
  return recursive(specifiedSearchPath, [ isPlayableFileComparator ]);
};
