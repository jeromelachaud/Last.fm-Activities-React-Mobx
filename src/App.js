import React, { Component } from 'react';
import Topbar from './components/Topbar.js';
import RecentTracks from './components/RecentTracks.js';
import { StyledApp } from './styles';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Topbar />
        <RecentTracks />
    </StyledApp>
    );
  }
}

export default App;
