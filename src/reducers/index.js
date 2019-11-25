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
