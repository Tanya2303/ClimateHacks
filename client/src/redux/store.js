import {
    applyMiddleware,
    compose, createStore
} from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile', 'basket', 'checkout']
};

export default () => {
    const store = createStore(
        persistCombineReducers(authPersistConfig),
        composeEnhancer(applyMiddleware(sagaMiddleware))
    );
    const persistor = persistStore(store);
    return { store, persistor };
};
