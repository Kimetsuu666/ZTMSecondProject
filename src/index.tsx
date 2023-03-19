import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements as StripeProvider } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

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

serviceWorkerRegistration.register();
