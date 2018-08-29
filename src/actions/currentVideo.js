var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  var returnObject = {
  	        type: 'CHANGE_VIDEO',
  	        video:video
  };
  return returnObject;
};

export default changeVideo;
