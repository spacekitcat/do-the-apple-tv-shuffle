import recursive from 'recursive-readdir';
import isMP4FileExtComparator from './isMP4FileExtComparator';

export default specifiedSearchPath => {
  return recursive(specifiedSearchPath, [ isMP4FileExtComparator ]);
};
