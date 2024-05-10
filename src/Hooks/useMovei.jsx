import axios from "axios";
import options from "../Utils/Api";
import {
  getNowPlayingMovei,
  getPopularMovei,
  getTopRatedMovei,
  getUpComeingMovei,
} from "../redux/movieSlice";
import { useDispatch } from "react-redux";

export const useNowPlaying = async () => {
  const nowPlay = "https://api.themoviedb.org/3/movie/now_playing";
  const dispatch = useDispatch();
  try {
    const res = await axios.get(nowPlay, options);
    console.log("pooja =",res);
    dispatch(getNowPlayingMovei(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export const usePopularMovei = async () => {
  const popular = "https://api.themoviedb.org/3/movie/popular";
  const dispatch = useDispatch();
  try {
    const  res = await axios.get(popular, options);
    console.log(res);
    dispatch(getPopularMovei(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export const useTopRatedMovei = async () => {
  const topRated = "https://api.themoviedb.org/3/movie/top_rated";
  const dispatch = useDispatch();
  try {
    const res = await axios.get(topRated, options);
    console.log(res);
    dispatch(getTopRatedMovei(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export const useUpComeingMovei = async () => {
  const upcomeing = "https://api.themoviedb.org/3/movie/upcoming";
  const dispatch = useDispatch();
  try {
    const res = await axios.get(upcomeing, options);
    console.log(res);
    dispatch(getUpComeingMovei(res.data.results));
  } catch (error) {
    console.log(error);
  }
};


 