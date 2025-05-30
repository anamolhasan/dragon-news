import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {createUser,setUser, updateUser} = use(AuthContext)
  const [nameError, setNameError] = useState('')

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target 
    const name = form.name.value
    if(name.length < 5){
      setNameError('name should be more then 5 character')
      return
    } else{
      setNameError('')
    }
    const photo = form.photo.value 
    const email = form.email.value 
    const password = form.password.value
    // console.log({name,photo,email,password})

    createUser(email, password)
     .then(result => {
       const user = result.user
       updateUser({displayName: name, photoURL:photo})
         .then(()=>{
          setUser({...user,displayName: name, photoURL:photo})
          navigate('/')
         }).catch((error) => {
          // An error occurred
          console.log(error.massage)
          setUser(user)
        });
      
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl font-bold text-center">
          Register your account !
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
          {nameError && <p className="text-error text-sm">{nameError}</p>}
            {/* photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 ">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
