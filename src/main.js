import placeholderModuleFunction from './findPlayableFiles';
import bonjour from 'bonjour';
import play from 'play-on-apple-tv';

bonjour().find({type: 'airplay'}, service => {
    placeholderModuleFunction('/Users/spacekitcat/Movies').then(results => console.log(results));
    const appleTvAddress = service.addresses[1];
    console.log('Found a service: ', appleTvAddress);
    const device = play('/Users/spacekitcat/Movies/video.mp4', appleTvAddress, (err) => {
		if (err) console.log(err)
    });
    console.log(device);
})


export default placeholderModuleFunction
