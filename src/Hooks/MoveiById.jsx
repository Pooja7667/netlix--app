import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action creator
export const loadTodos = createAsyncThunk(
  "todos/loadTodos", // Action type
  async (moveiId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${moveiId}`,
        {
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdlNTgxYzczZmMxMzIwYTk2OWQ3NmEwNjI5NTYxOCIsInN1YiI6IjY2MjRlNWRlMjIxYmE2MDE3YzE0NTk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HmDHavoc3rRstEBHBGeXz4-LBSi6f-nWt49ihXDwZE0",
          },
        }
      );
      return response.data; // Return the data to be dispatched
    } catch (error) {
      throw error; // Throw error to be caught by rejected action
    }
  }
);

// Slice definition
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;
