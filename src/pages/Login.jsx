import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState('')
  const {signIn} = use(AuthContext)
  const location =useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value 
    const password = e.target.password.value
    // console.log({email,password})
    signIn(email, password)
     .then(result => {
      const user = result.user
      console.log(user)
      navigate(`${location.state ? location.state : "/"}`)
     })
     .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message
      // setError(error.message || "Login failed.");
      setError(errorCode)
     })
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl font-bold text-center">Login your account !</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {/* -------- */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

          {
            error && <p className="text-red-500 text-xs">{error}</p>
          }
            <button type="submit" className="btn btn-neutral mt-4 ">Login</button>
            <p className="font-semibold text-center pt-5">
              Don't Have An Account ?{" "}
              <Link className="text-secondary" to={"/auth/register"}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
