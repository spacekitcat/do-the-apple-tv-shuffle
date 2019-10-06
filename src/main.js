import findPlayableFiles from "./findPlayableFiles";
import bonjour from "bonjour";
import play from "play-on-apple-tv";
import randomWrapper from "./randomWrapper";

const playNext = (mediaFolder, appleTvAddress) =>
  findPlayableFiles(mediaFolder).then(results => {
    const mediaFile = results[randomWrapper(0, results.length - 1)];
    console.log(`Playing: ${mediaFile}`);
    return play(
      mediaFile,
      appleTvAddress,
      err => {
        if (err) console.log(err);
      }
    );
  });



console.log(process.argv[2]);
if (!process.argv[2]) {
  console.error('You must specify a media folder populated with AirPlay compatible MP4 files (i.e. node . <path-to-mp4-files>)');
  process.exit();
}

const mediaFolder = process.argv[2];
bonjour().find({ type: "airplay" }, async service => {
  const appleTvAddress = service.addresses[1];
  console.log("Found a service: ", appleTvAddress);
  const device = await playNext(mediaFolder, appleTvAddress);

  const playDeviceEventHandler = async event => {
    console.log(event);
    if (event.state === "stopped") {
      const device = await playNext(mediaFolder, appleTvAddress);
      device.on('event', playDeviceEventHandler);
    }
  }

  device.on('event', playDeviceEventHandler);
});
