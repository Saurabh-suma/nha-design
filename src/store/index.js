import { configureStore } from '@reduxjs/toolkit';
import Patient from './slice/Patient.slice';
import Consent from './slice/Consent.slice';
import Login from './slice/Login.slice';


const store = configureStore({
 reducer: {
   [Patient.reducerPath]: Patient.reducer,
   [Consent.reducerPath]: Consent.reducer,
   [Login.reducerPath]: Login.reducer,
 },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Patient.middleware, Consent.middleware, Login.middleware),
});

export default store;
