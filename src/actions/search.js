import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from './../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  //we return a function instead of an action object
  return(dispatch) => {

  	var options = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    };

   console.log('something', options);
  	//we need a function to search in Youtube for content and dispatch using the result
  	searchYouTube(options, (videos) => {
  		//this function is able to
  		console.log(options);
  		console.log('results', videos);
  		// dispatch other action creators with the results from the API call
  		dispatch(changeVideoList(videos))
  		dispatch(changeVideo(videos[0]))
  	});
  }
};

// handleVideoSearch('cats');

export default handleVideoSearch;
