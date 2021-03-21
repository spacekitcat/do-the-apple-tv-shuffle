import bonjour from 'bonjour';
import createPlayDeviceEventHandler from './createPlayDeviceEventHandler';

import playNext from './playNext';

export default (argv) => {
  if (!argv[2]) {
    console.error(
      'You must specify a media folder populated with AirPlay compatible MP4 files (i.e. node . <path-to-mp4-files>)'
    );
    process.exit();
  }

  const mediaFolder = argv[2];

  const handleServiceLocatedEvent = async service => {
    const appleTvAddress = service.addresses[1];

    console.log('Found a service: ', appleTvAddress);
    console.log('Scanning: ', mediaFolder);

    const device = await playNext(mediaFolder, appleTvAddress, (error) => { console.log(error) });
    device.on('event', (event) => {
      return createPlayDeviceEventHandler(mediaFolder, appleTvAddress)(event)
    });
  };

  bonjour().find({ type: 'airplay' }, handleServiceLocatedEvent);
}
