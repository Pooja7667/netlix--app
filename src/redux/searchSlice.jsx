import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    moveiName: null,
    searchedMovei: null,
  },

  reducers: {
    setSearchMovieDtaiDetails: (state, action) => {
      const { searchedMovei, moveis } = action.payload;
      state.moveiName = searchedMovei;
      state.searchedMovei = moveis;
    },
  },
});

export const { setSearchMovieDtaiDetails } = searchSlice.actions;
export default searchSlice.reducer;
