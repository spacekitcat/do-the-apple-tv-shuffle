import play from "play-on-apple-tv";
import randomWrapper from "./randomWrapper";
import findPlayableFiles from "./findPlayableFiles";
import _ from 'lodash';

const playRandom = (mediaList, appleTvAddress) => {
  const mediaFile = mediaList[0];
  global.mediaList = global.mediaList.slice(1);
  console.log('NEW', mediaList.length);
  console.log(`Playing: ${mediaFile}`);
  return play(mediaFile, appleTvAddress, err => {
  	if (err) console.log(err);
  });
}

export default async (mediaFolder, appleTvAddress) =>	{
	console.log("Hot swappin' flegerty madee!");
	if (!global.mediaList || global.mediaList.length === 0) {		
		global.mediaList = await findPlayableFiles(mediaFolder); 
	}

	console.log('[result count]', mediaList.length);
    if (mediaList.length > 0) {
      global.mediaList = _.shuffle(mediaList);
      return playRandom(global.mediaList, appleTvAddress);	  
    }
}
