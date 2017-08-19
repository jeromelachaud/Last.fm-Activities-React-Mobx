import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'mobx-react';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import lastfmStore from './stores/lastfmStore'

const providedApp = (
  <Provider lastfmStore={lastfmStore}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(providedApp, document.getElementById('root'));
registerServiceWorker();
