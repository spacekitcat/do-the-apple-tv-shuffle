import recursive from 'recursive-readdir';
import playableComparator from './playableComparator';

export default specifiedSearchPath => {
  return recursive(specifiedSearchPath, [ playableComparator ]);
};
