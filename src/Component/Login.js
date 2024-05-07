import React, { useState } from "react";
import axios from "axios";
import "../Style/Login.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      let user;
      if (isLogin) {
        // Login
        user = { email, password };
        const res = await axios.post("http://localhost:5000/login", user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log( "tot=",res);
        if (res.data.success) {
           console.log("massage =", res.data.success);
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browser");
      } else {
        // Register
        user = { fname, email, password };
        const res = await axios.post("http://localhost:5000/register", user, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred");
      console.log(error);
    } finally {
      dispatch(setLoading(false));
      setEmail("");
      setPassword("");
      setFname("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={getInputData} className="form-container">
        {!isLogin && (
          <div>
            <label htmlFor="fname">Full Name:</label>
            <input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button">
          {`${isLoading ? "loading..." : isLogin ? "Login" : "Signup"}`}
        </button>
        <p>
          {isLogin ? " Don't have an account?" : "Already have an account?"}
          <span onClick={loginHandler}> {isLogin ? "Register " : "Login"}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
