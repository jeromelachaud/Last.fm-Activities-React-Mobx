import React, { Component } from 'react';
import RecentTracks from './components/RecentTracks.js';
import {StyledApp} from './styles';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <RecentTracks />
    </StyledApp>
    );
  }
}

export default App;
