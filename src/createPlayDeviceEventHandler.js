import playNext from './playNext';

export default (mediaFolder, appleTvAddress) =>
  async function playDeviceEventHandler(event) {
  console.log(event);
  if (event.state === "stopped") {
    console.log(event);
    const device = await playNext(mediaFolder, appleTvAddress, () => {});
    device.on("event", playDeviceEventHandler);
  }
};