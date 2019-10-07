import createPlayDeviceEventHandler from '../src/createPlayDeviceEventHandler';
import playNext from '../src/playNext';

jest.mock('../src/playNext');
const deviceDotOnMock = jest.fn();
playNext.mockImplementation(() => ({ on: deviceDotOnMock }));

describe('The `createPlayDeviceEventHandler` module', () => {
  describe('when called', () => {
    it('should return a function', () => {
      expect(createPlayDeviceEventHandler('', '')).toBeInstanceOf(Function);
    });
  });

  describe('when the created function is called with an unrecognized state', () => {
    const specifiedMediaFolder = '/my/awesome/media';
    const specifiedAppleTvAddress = '192.168.45.22';
    let resultPlayDeviceEventHandler;

    beforeAll(async () => {
      resultPlayDeviceEventHandler = createPlayDeviceEventHandler(
        specifiedMediaFolder,
        specifiedAppleTvAddress
      );
      await resultPlayDeviceEventHandler({ state: 'magic' });
    });

    it('should NOT call `playNext` with the specified parameters', () => {
      expect(playNext).not.toHaveBeenCalled();
    });

    it('should NOT call `device.on` with the a self reference callback', () => {
      expect(deviceDotOnMock).not.toHaveBeenCalled();
    });
  });

  describe('when the created function is called with a state of `stopped`', () => {
    const specifiedMediaFolder = '/my/awesome/media';
    const specifiedAppleTvAddress = '192.168.45.22';
    let resultPlayDeviceEventHandler;

    beforeAll(async () => {
      resultPlayDeviceEventHandler = createPlayDeviceEventHandler(
        specifiedMediaFolder,
        specifiedAppleTvAddress
      );
      await resultPlayDeviceEventHandler({ state: 'stopped' });
    });

    it('should call `playNext` with the specified parameters', () => {
      expect(playNext).toHaveBeenCalledWith(
        specifiedMediaFolder,
        specifiedAppleTvAddress
      );
    });

    it('should call `device.on` with the a self reference callback', () => {
      expect(deviceDotOnMock).toHaveBeenCalledWith(
        'event',
        resultPlayDeviceEventHandler
      );
    });
  });
});
