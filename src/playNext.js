import play from "play-on-apple-tv";
import randomWrapper from "./randomWrapper";
import findPlayableFiles from "./findPlayableFiles";
import _ from 'lodash';
import levenshtein from 'fast-levenshtein';

const playRandom = (mediaList, appleTvAddress) => {
  const candidates = 3;
  var highest = 0;
  var highestIndex = 0;
  for (var i=0; i<Math.min(candidates, mediaList.length); ++i)
  {
    var candidateDiffFromPrev = levenshtein.get(mediaList[i], global.currentlyPlaying);
    if (candidateDiffFromPrev > highest)
    {
      highest = candidateDiffFromPrev;
      highestIndex = i;
    }
  }

  const mediaFile = mediaList[highestIndex];
  global.mediaList.splice(highestIndex, 1);
  console.log(`Playing: ${mediaFile}`);
  global.currentlyPlaying = mediaFile;
  return play(mediaFile, appleTvAddress, err => {
  	if (err) console.log(err);
  });
}

export default async (mediaFolder, appleTvAddress) =>	{
	if (!global.mediaList || global.mediaList.length === 0) {		
		global.mediaList = await findPlayableFiles(mediaFolder);
    global.mediaList = _.shuffle(global.mediaList);
    global.currentlyPlaying = "";
	}

	console.log(`Remaining media item pool size is ${mediaList.length}`);
    if (mediaList.length > 0) {
      return playRandom(global.mediaList, appleTvAddress);	  
    }
}
