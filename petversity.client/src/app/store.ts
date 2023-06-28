import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice";
import petsReducer from "../features/pets/pets.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
