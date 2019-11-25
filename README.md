This is a very simple app that displays a list of songs and the currently selected song.

This is for practicing react with redux. There are comments within the code the explain how it works.

## Notes

### Connect
The connect function gets data from the store and passes it to the component.
```
// SongList.js
import { connect } from 'react-redux';

// the state is passed in by Provider as store={createStore(reducers)} in src/index.js
const mapStateToProps = (state) => {
  return { song: state.songs }
};

export default connect(mapStateToProps)(SongList);

// SongDetail.js
const SongDetail = (props) => {
  console.log(props)
  // output from props is from passing mapStateToProps to connect()()
  <!-- output:
  { mySelectedSong: {
    title: 'Whisper',
    duration: '3:52
  }} -->
  return <div>song detail</div>
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);
```

The connect function also gets action creators into components e.g. SongList.

We first import the action creators and pass it to the second argument of connect as an object.

The connect function will take the `selectSong` action creator pass it into the `SongList` component as a prop. It cannot be called directly (without passing it to `connect` first).

Redux does not automatically detect action creators being called and does not automatically detect a function returning an object that is an 'action', so we must pass `selectSong` to connect so it will be passed through the reducers and then to store. (Directly calling the action creator like a function e.g. `selectSong()` will not pass through the redux and will just return an object, so DONT call it directly).

We don't use `dispatch` here because by passing the `selectSong` (an action creator) into `connect`, whenever the `this.props.selectSong` gets called, `connect` will take the action that gets returned and `dispatch` it for us.
```
import { selectSong } from '../../actions/index.js';

export default connect(mapStateToProps, { selectSong })(SongList);
```
In the object, `{ selectSong }` is ES6 syntax. It is the same as `{ selectSong: selectSong }`.

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
