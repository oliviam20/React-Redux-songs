// action creator
export const selectSong = (song) => {
  // return an action (payload is optional)
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
};
