import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Pets } from "./pet.types";

export const GET_PETS_ACTION = "pets/getPets";

export const getPets = createAsyncThunk(
  GET_PETS_ACTION,
  async (): Promise<Pets> => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/pets`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    return data;
  }
);
