import React from "react";
import "../Style/Header.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import tost from "react-hot-toast";
import { setToggalSearch } from "../redux/movieSlice";

// Header component responsible for rendering the application header
const Header = () => {
  // Redux selectors to access user data and toggle search state
  const user = useSelector((store) => store.app.user);

  const toggalSearch = useSelector((store) => store.movei.toggalSearch);
  console.log("toggalSearch=", toggalSearch);
  // Redux dispatch function to dispatch actions
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
     navigate("/")
    try {
      const res = await axios.get(
        "https://entertainmentbackend-4bjs.onrender.com/logout"
      );
      console.log(res);
      if (res.data.success) {
        tost.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  // Handler function to navigate to the bookmark page
  const bmPage = () => {
    navigate("/bookmark");
  };
  // Rendering the header component
  return (
    <>
      <header>
        <nav className="navbar">
          <h1 className="navbar-brand">@movio</h1>
      
          {/* Conditional rendering based on the toggleSearch state */}
          <button
            className="logout"
            onClick={() => {
              dispatch(setToggalSearch());
            }}
          >
            {toggalSearch ? " Home" : "Secrch"}
          </button>
          <button className="logout" onClick={logoutHandler}>
            Logout
          </button>
        </nav>
        <button onClick={bmPage}>BM</button>
      </header>
    </>
  );
};

export default Header;
