import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./Slices/gameSlices";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
