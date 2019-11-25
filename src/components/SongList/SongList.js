import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      )
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
};

// passing the entire state from store to mapStateToProps
// return the list of songs from the store as props to the SongList component (in the connect function below)
const mapStateToProps = (state) => {
  return { songs: state.songs }
};

// connect has two () because the connect function is returning a function. Need to add 2nd () to call the inner function to get the return
// e.g. function connect() {
//   return function() {
//     return 'Hello'
//   }
// }
// Here, we pass to connect mapStateToProps and SongList. mapStateToProps is returning the list of songs from state. connect will pass the list of songs as props to the SongList component.
export default connect(mapStateToProps)(SongList);

// Only need to import connect in the component, not the App component
// connect is actually a react component
// anytime the state changes inside the store, the Provider will automatically notify the connection function/component. The connect function will then pass the new state into SongList component
