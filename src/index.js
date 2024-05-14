import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/advert/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/* import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-a-camper/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
); */

/* https://dm-zhuk.github.io/rent-a-camper/ */
