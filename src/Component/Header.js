import React from "react";
import "../Style/Header.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import tost from "react-hot-toast";
import { setToggalSearch } from "../redux/movieSlice";
const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggalSearch = useSelector((store) => store.movei.toggalSearch);
  console.log("toggalSearch=", toggalSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("/logout");
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
  return (
    <>
      <header>
        <nav className="navbar">
          <h1 className="navbar-brand">@movio</h1>

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
          <h1 style={{ background: "white", color: "pink" }}>
            {user && user.fname}
          </h1>
        </nav>
      </header>
    </>
  );
};

export default Header;
