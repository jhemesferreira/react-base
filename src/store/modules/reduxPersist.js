import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'Nome-da-Aplicacao',
      storage,
      whitelist: ['example'], // modulo que eu quero que grave, pod ser mais de um
    },
    reducers
  );

  return persistedReducer;
};
