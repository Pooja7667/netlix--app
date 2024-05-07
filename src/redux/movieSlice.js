import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovei: null,
  PopularMovei: null,
  TopRatedMove: null,
  UpComeingMovei: null,
  toggalSearch: false,
  MoveiTailar:null,
  open: false,
  ID:"",
};

export const moveiSlice = createSlice({
  name: "movei",
  initialState,
  reducers: {
    //action
    getNowPlayingMovei: (state, action) => {
      state.nowPlayingMovei = action.payload;
    },
    getPopularMovei: (state, action) => {
      state.PopularMovei = action.payload;
    },
    getTopRatedMovei: (state, action) => {
      state.TopRatedMove = action.payload;
    },
    getUpComeingMovei: (state, action) => {
      state.UpComeingMovei = action.payload;
    },
    setToggalSearch: (state) => {
      state.toggalSearch = !state.toggalSearch;
    },

    getMoveiTailar: (state, action) => {
      state.MoveiTailar = action.payload;
    }
,
    setOpen: (state, action) =>{
      state.open=action.payload
    }
    ,
    getID: (state,action )=>{
      state.ID=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  getNowPlayingMovei,
  getPopularMovei,
  getTopRatedMovei,
  getUpComeingMovei,
  setToggalSearch,
  getMoveiTailar,
  setOpen,
  getID,
} = moveiSlice.actions;

export default moveiSlice.reducer;
