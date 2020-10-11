import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'reducers';

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <CssBaseline>
        <App />
      </CssBaseline>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
