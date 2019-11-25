This is a very simple app that displays a list of songs and the currently selected song.

This is for practicing react with redux. There are comments within the code the explain how it works.

## Notes

### Connect
the connect function gets data from the store and passes it to the component. See SongList.js
```
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { songs: state.songs }
};

export default connect(mapStateToProps)(SongList);
```

### Provider
Provider is used to wrap the App component, passing it the entire store. See src/index.js
Create a redux store using createStore, passing in our reducers (songs, selectedSong) exported from the reducer file
```
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App/App';
import reducers from './reducers/index.js';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
