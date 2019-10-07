import createPlayDeviceEventHandler from "../src/createPlayDeviceEventHandler";
import playNext from "../src/playNext";

jest.mock("../src/playNext");
playNext.mockImplementation(() => ({ on: () => true}));

describe("The `createPlayDeviceEventHandler` module", () => {
  describe("when called", () => {
    it("should return a function", () => {
      expect(createPlayDeviceEventHandler("", "")).toBeInstanceOf(Function);
    });
  });

  describe("when the created function is called with a state of `stopped`", () => {
    it("should call `playNext` with the specified parameters", async () => {
      const specifiedMediaFolder = "/my/awesome/media";
      const specifiedAppleTvAddress = "192.168.45.22";
      const resultPlayDeviceEventHandler = createPlayDeviceEventHandler(
        specifiedMediaFolder,
        specifiedAppleTvAddress
      );

      await resultPlayDeviceEventHandler({ state: "stopped" });

      expect(playNext).toHaveBeenCalledWith(specifiedMediaFolder, specifiedAppleTvAddress);
    });
  });
});
