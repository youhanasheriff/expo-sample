import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { userReducer } from './reducers';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);


export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof userReducer>;

export type AppDispatch = typeof store.dispatch;