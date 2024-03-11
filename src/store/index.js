// store.js
import { configureStore } from '@reduxjs/toolkit';
import Consent from './slice/Consent.slice';

const store = configureStore({
 reducer: {
    [Consent.reducerPath]: Consent.reducer,
 },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Consent.middleware),
});

export default store;
