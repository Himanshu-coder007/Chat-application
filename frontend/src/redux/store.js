import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messageReducer from "./messageSlice.js";
import socketReducer from "./socketSlice.js";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // Solution 1: Blacklist the socket slice entirely
  blacklist: ["socket"], // Add this line

  // OR Solution 2: Use a custom serializer (more advanced)
  // serialize: (data) => {
  //   return JSON.stringify(data, (key, value) => {
  //     if (key === 'socket') return undefined; // Skip socket
  //     return value;
  //   });
  // },
};

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  socket: socketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // Also ignore the socket field in state checks
        ignoredPaths: ["socket"],
      },
    }),
});

export default store;
