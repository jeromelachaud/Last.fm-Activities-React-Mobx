import React, { Component } from 'react';
import Topbar from './components/Topbar.js';
import { StyledApp } from './styles';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Topbar />
      </StyledApp>
    );
  }
}

export default App;
