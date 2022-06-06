import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phonebookApi } from '../redux/phonebook/phonebook-slice';
import { filter } from './phonebook/phonebook-reducer';

export const store = configureStore({
  reducer: {
    filter,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});

setupListeners(store.dispatch);
