import storage from "redux-persist/es/storage";
import rootReducer from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

// Bọc rootReducer bằng persistReducer để F5 không mất Redux state
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  // redux-persist có một số action không serialize được hoàn toàn
  // nên tắt check này để tránh warning ở console
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Type dùng cho useSelector
export type RootState = ReturnType<typeof store.getState>;

// Type dùng cho useDispatch
export type AppDispatch = typeof store.dispatch;
