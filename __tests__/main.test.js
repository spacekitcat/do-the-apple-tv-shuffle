import bonjour from 'bonjour';
import createPlayDeviceEventHandler from '../src/createPlayDeviceEventHandler';
import playNext from '../src/playNext';
import main from '../src/main'

jest.mock("bonjour");
jest.mock("../src/createPlayDeviceEventHandler");
jest.mock("../src/playNext");

describe("The `main` module", () => {
  const mockBonjourFind = jest.fn();
  beforeAll(() => {
    bonjour.mockReturnValue({ find: mockBonjourFind });
    main(['', '', 'a-folder/']);
  });

  it('should make the expected call to Bonjour find function', () => {
    expect(mockBonjourFind).toHaveBeenCalledWith({ type: 'airplay' }, expect.any(Function));

  });
});
