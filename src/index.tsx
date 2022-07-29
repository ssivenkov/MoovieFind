import React from 'react';

import { App } from 'App';
import { GlobalAppNullStyles, GlobalAppStyles } from 'AppGlobalStyles';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <GlobalAppNullStyles />
        <GlobalAppStyles />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
