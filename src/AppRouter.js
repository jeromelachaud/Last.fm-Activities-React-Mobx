import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App.js';
import RecentTracks from './components/RecentTracks';
import TopArtists from './components/TopArtists';
import { StyledApp } from './styles';

let AppRouter = React.createClass ({
  render() {
    return (
      <BrowserRouter>
        <StyledApp>
          <Route path="/" component={App}/>
          <Route exact path="/" component={RecentTracks}/>
          <Route path="/recent-tracks" component={RecentTracks} />
          <Route path="/top-artists" component={TopArtists} />
        </StyledApp>
      </BrowserRouter>
    );
  }
});

export default AppRouter;
