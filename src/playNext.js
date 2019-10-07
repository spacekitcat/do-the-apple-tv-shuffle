import play from "play-on-apple-tv";
import randomWrapper from "./randomWrapper";
import findPlayableFiles from "./findPlayableFiles";

export default (mediaFolder, appleTvAddress) =>
  findPlayableFiles(mediaFolder).then(results => {
    const mediaFile = results[randomWrapper(0, results.length - 1)];
    console.log(`Playing: ${mediaFile}`);
    return play(mediaFile, appleTvAddress, err => {
      if (err) console.log(err);
    });
  });