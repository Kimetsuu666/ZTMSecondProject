import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './root-reducer';
import  storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { logger } from 'redux-logger/src';
import thunk from 'redux-thunk';

// redux in local storage
const persistConfig = {
	key: 'root',
	storage,
	// dont set some slice in local storage
	whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

// activate Redux Devtools
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store)
