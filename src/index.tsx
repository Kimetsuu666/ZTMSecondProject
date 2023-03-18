import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements as StripeProvider } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <StripeProvider stripe={stripePromise}>
                        <App />
                    </StripeProvider>
                </BrowserRouter>
            </PersistGate>
        </ReduxProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
