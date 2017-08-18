import React from 'react';
import {
  Route,
  BrowserRouter
} from 'react-router-dom';
import RecentTracks from './components/RecentTracks';
import App from './App.js';

let AppRouter = React.createClass ({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={App}/>
          <Route exact path="/" component={RecentTracks}/>
          <Route path="/recent-tracks" component={RecentTracks} />
        </div>
      </BrowserRouter>
    );
  }
});

export default AppRouter;
