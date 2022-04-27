import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/auth";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
});

const persistedReducer = persistReducer({
    key: "root-social-media",
    version: 1,
    storage: storage
}, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;