import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(isSignInForm ? null : name.current.value, email.current.value, password.current.value)
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
        updateProfile(user, {
        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/174887324?s=400&v=4"
        })
        .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ 
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL: photoURL }))
        navigate("/browser")
        }).catch((error) => {
        setErrorMessage(error.message)
        });
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
    });
    }
    else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      })
    }
  }

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3d31dac6-aaf0-4e6e-8bd7-e16c5d9cd9a3/web/IN-en-20260119-TRIFECTA-perspective_cce70d60-69c5-428f-99cf-44c212fcec3f_large.jpg"
          alt="bg"
        />
      </div>
      <form 
       onSubmit={(e) => e.preventDefault()}
       className="w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#393939] rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#393939] rounded-lg"
        />
        <input
          ref={password} 
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#393939] rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
          >
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
