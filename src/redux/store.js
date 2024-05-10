import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice"
import listSlice from  "./listmove"
import todolist from "../Hooks/MoveiById"

 const store = configureStore({
   reducer: {
     app: userReducer,
     movei: movieReducer, //
     searchMovie: searchSlice,
     list: listSlice,
     movieDetails:todolist
   },
 });


export default store;