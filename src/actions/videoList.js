var changeVideoList = (videos) => {
  //TODO:  Return some action object to change the list of videos in VideoList.
  
  var returnObject = {
  	        type: 'CHANGE_VIDEO_LIST',
  	        videos:videos
  };

  return returnObject;
};

export default changeVideoList;
