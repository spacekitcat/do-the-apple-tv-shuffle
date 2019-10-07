import playNext from './playNext';

export default (mediaFolder, appleTvAddress) =>
async function playDeviceEventHandler(event) {
  console.log(event);
  if (event.state === "stopped") {
    const device = await playNext(mediaFolder, appleTvAddress);
    device.on("event", playDeviceEventHandler);
  }
};