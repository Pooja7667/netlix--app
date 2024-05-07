import { useDispatch } from "react-redux";
import { getMoveiTailar } from "../redux/movieSlice";
import axios from "axios";
import { useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdlNTgxYzczZmMxMzIwYTk2OWQ3NmEwNjI5NTYxOCIsInN1YiI6IjY2MjRlNWRlMjIxYmE2MDE3YzE0NTk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HmDHavoc3rRstEBHBGeXz4-LBSi6f-nWt49ihXDwZE0",
  },
};

const useMovieById = async (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        console.log(res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        });
        dispatch(
          getMoveiTailar(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  },);
};

export default useMovieById;
