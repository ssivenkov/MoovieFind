import React, { createContext } from 'react';

import { App } from 'App';
import { GlobalAppStyles, GlobalNullStyles } from 'globalStyles';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { rootStoreModel } from 'store/rootStoreModel';

export const store = rootStoreModel.create({});

export const StoreContext = createContext(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <StoreContext.Provider value={store}>
        <GlobalNullStyles />
        <GlobalAppStyles />
        <App />
      </StoreContext.Provider>
    </HashRouter>
  </React.StrictMode>,
);
