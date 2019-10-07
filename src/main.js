import bonjour from "bonjour";
import createPlayDeviceEventHandler from "./createPlayDeviceEventHandler";
import playNext from './playNext';

if (!process.argv[2]) {
  console.error(
    "You must specify a media folder populated with AirPlay compatible MP4 files (i.e. node . <path-to-mp4-files>)"
  );
  process.exit();
}

const mediaFolder = process.argv[2];
bonjour().find({ type: "airplay" }, async service => {
  const appleTvAddress = service.addresses[1];
  console.log("Found a service: ", appleTvAddress);
  const device = await playNext(mediaFolder, appleTvAddress);
  device.on("event", createPlayDeviceEventHandler(mediaFolder, appleTvAddress));
});
