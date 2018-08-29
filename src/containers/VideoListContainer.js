import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var mapStateToProps = (state) => {
  return  {videos: state.videoList}
}

var mapDispatchToProps = {
  handleVideoListEntryTitleClick: changeVideo,
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
