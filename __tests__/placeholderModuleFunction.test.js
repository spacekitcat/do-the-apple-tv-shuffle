import placeholderModuleFunction from '../src/placeholderModuleFunction';
import { isTSAnyKeyword } from '@babel/types';

describe('The `placeholderModuleFunction` module', () => {
  it('should have the value `null`', () => {
    expect(placeholderModuleFunction()).toBeNull();
  });
});
