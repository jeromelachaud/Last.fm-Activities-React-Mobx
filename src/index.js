import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  Provider
} from 'mobx-react';
import lastfmStore from './stores/lastfmStore'

const providedApp = (
  <Provider lastfmStore={lastfmStore}>
    <App />
  </Provider>
)

ReactDOM.render(providedApp, document.getElementById('root'));
registerServiceWorker();
