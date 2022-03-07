import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { App } from 'App';
import { store } from 'store/store';

const GlobalStyles = createGlobalStyle`
body {
    font-size: 16px;
    color: var(--white);
}

// initial colors
html {
    --primary_light: #ff6e77;
    --primary: #ff4046;
    --primary_dim: #d2484d;
    --primary_medium: #b52634;
    --primary_almost-medium: #87293a;
    --primary_half-medium: #500608;
    --primary_dark: #3b0305;
    --background1: #c27481;
    --background2: #ffb8bc;
    --white: #fff;
    --gray: #444;
    --dark: #4f626c;
    --black: #000;
}

// width
html {
    --content-width: 1400px;
}

// hide default background color on click
* {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
