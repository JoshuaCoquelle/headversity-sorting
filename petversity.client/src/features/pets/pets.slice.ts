import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getPets } from "./pets.action";
import type { Pets } from "./pet.types";

const initialState = {
  pets: [] as Pets,
};

const petSlices = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPets.fulfilled,
      (state, { payload }: PayloadAction<Pets>) => {
        state.pets = payload;
      }
    );
  },
});

export const selectPetState = (state: RootState) => state.pets;

export default petSlices.reducer;
