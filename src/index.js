import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App/App';
// importing index.js automatically from reducers folder (only works if file is named index.js)
import reducers from './reducers';

ReactDOM.render(
  // Wrap App component with Provider component so our App can access the store
  // create a redux store using createStore, passing in our reducers (songs, selectedSong) exported from the reducer file
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
