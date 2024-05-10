import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index :null
}


const listSlice = createSlice({
  name:"index",
  initialState,

  reducers: {
    setlist: (state ,action) => {
     state.index= action.payload
  }

  },
});


export const { setlist } = listSlice.actions;

export default listSlice.reducer;