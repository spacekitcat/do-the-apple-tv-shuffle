import playNext from "../src/playNext";
import play from "play-on-apple-tv";
import findPlayableFiles from "../src/findPlayableFiles";
import randomWrapper from "../src/randomWrapper";

jest.mock("play-on-apple-tv");
jest.mock("../src/findPlayableFiles");
jest.mock("../src/randomWrapper");

describe("The `playNext` module", () => {
  describe("when the returned list has two item and the random function returns 0", () => {
    const specifiedMediaFolder = "/my/films";
    const specifiedAppleTvAddress = "192.168.4.7";

    beforeAll(async () => {
      findPlayableFiles.mockResolvedValueOnce(["/my/films/a-file.mp4", "/my/films/b-file.mp4"]);
      randomWrapper.mockReturnValueOnce(0);

      await playNext(specifiedMediaFolder, specifiedAppleTvAddress);
    });

    it("should call the `findPlayableFiles` method", async () => {
      expect(findPlayableFiles).toHaveBeenCalledWith(specifiedMediaFolder);
    });

    it("should call the `randomWrapper` method", async () => {
      expect(randomWrapper).toHaveBeenCalledWith(0, 1);
    });

    it("should call the `findPlayableFiles` method", async () => {
      expect(play).toHaveBeenCalledWith(
        `/my/films/a-file.mp4`,
        specifiedAppleTvAddress,
        null
      );
    });
  });

  describe("when the returned list has two item and the random function returns 1", () => {
    const specifiedMediaFolder = "/my/films";
    const specifiedAppleTvAddress = "192.168.4.7";

    beforeAll(async () => {
      findPlayableFiles.mockResolvedValueOnce(["/my/films/a-file.mp4", "/my/films/b-file.mp4"]);
      randomWrapper.mockReturnValueOnce(1);

      await playNext(specifiedMediaFolder, specifiedAppleTvAddress);
    });

    it("should call the `findPlayableFiles` method", async () => {
      expect(findPlayableFiles).toHaveBeenCalledWith(specifiedMediaFolder);
    });

    it("should call the `randomWrapper` method", async () => {
      expect(randomWrapper).toHaveBeenCalledWith(0, 1);
    });

    it("should call the `findPlayableFiles` method", async () => {
      expect(play).toHaveBeenCalledWith(
        `/my/films/b-file.mp4`,
        specifiedAppleTvAddress,
        null
      );
    });
  });

  describe("when the returned list has one item", () => {
    const specifiedMediaFolder = "/my/films";
    const specifiedAppleTvAddress = "192.168.4.7";

    beforeAll(async () => {
      findPlayableFiles.mockResolvedValueOnce(["/my/films/a-file.mp4"]);
      randomWrapper.mockReturnValueOnce(0);

      await playNext(specifiedMediaFolder, specifiedAppleTvAddress);
    });

    it("should call the `findPlayableFiles` method", async () => {
      expect(findPlayableFiles).toHaveBeenCalledWith(specifiedMediaFolder);
    });

    it("should call the `randomWrapper` method", async () => {
      expect(randomWrapper).toHaveBeenCalledWith(0, 0);
    });

    it("should call the `findPlayableFiles` method", async () => {
      expect(play).toHaveBeenCalledWith(
        `/my/films/a-file.mp4`,
        specifiedAppleTvAddress,
        null
      );
    });
  });

  describe("when the returned list has zero item", () => {
    const specifiedMediaFolder = "/my/films";
    const specifiedAppleTvAddress = "192.168.4.7";

    beforeEach(async () => {
      findPlayableFiles.mockResolvedValueOnce([]);

      randomWrapper.mockReset();
      play.mockReset();
      await playNext(specifiedMediaFolder, specifiedAppleTvAddress);
    });

    it("should call the `findPlayableFiles` method", async () => {
      expect(findPlayableFiles).toHaveBeenCalledWith(specifiedMediaFolder);
    });

    it("should NOT call the `randomWrapper` method", async () => {
      expect(randomWrapper).not.toHaveBeenCalled();
    });

    it("should NOT call the `findPlayableFiles` method", async () => {
      expect(play).not.toHaveBeenCalled();
    });
  });
});
