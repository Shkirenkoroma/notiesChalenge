import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'redux/index';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
      </React.StrictMode>
);

