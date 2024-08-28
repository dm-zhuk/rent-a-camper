import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/advert/store';
import Fallback from 'components/Fallback/Fallback';
import App from 'components/Loader/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-a-campervan">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ErrorBoundary FallbackComponent={Fallback}>
            <App />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
