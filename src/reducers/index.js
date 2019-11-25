// named export use {}
import { combineReducers } from 'redux';

// reducers
const songsReducer = () => {
  return [
    { title: 'Lighter than air', duration: '4:05' },
    { title: 'The way we were', duration: '3:15' },
    { title: 'Whisper', duration: '3:52' },
    { title: 'Footprints', duration: '3:09' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// combine all the reducers and export them for other places that the app can use (e.g src/index.js SongDetail.js). the keys here will become the state keys
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
