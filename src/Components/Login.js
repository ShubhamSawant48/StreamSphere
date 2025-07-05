import { BG_URL } from "../utils/constants";
import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const errorMessage = validate(email.current.value, password.current.value);
    setErrMsg(errorMessage);
    if (errorMessage) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/main");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/main");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <Header />
      <img
        src={BG_URL}
        alt="Background Image"
        className="w-full h-screen"
      ></img>
      <form
        className="bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/12 h-fit bg-opacity-80 text-white flex flex-col gap-4 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="px-10 pt-10 pb-4 text-start font-bold text-4xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Name"
            className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mt-2 border border-solid-1 border-white"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Your Email"
          className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mt-1 mb-1 border border-solid-1 border-white"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mb-6 border border-solid-1 border-white"
        ></input>
        <p className="font-bold text-red-600 text-lg ml-10">{errMsg}</p>
        <button
          onClick={handleButtonClick}
          className="rounded-md bg-red-900 w-[80%] px-8 py-4 ml-9 mt-2"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        ; ;
        {!isSignIn && (
          <h3 className="mb-10 ml-32">
            Already registered?{" "}
            <span
              onClick={toggleSignIn}
              className="font-bold hover:cursor-pointer hover:underline"
            >
              Sign In Now.
            </span>
          </h3>
        )}
        {isSignIn && (
          <h3 className="mb-10 ml-32">
            {" "}
            New to Netflix?{" "}
            <span
              onClick={toggleSignIn}
              className="font-bold hover:cursor-pointer hover:underline"
            >
              Sign up now.
            </span>
          </h3>
        )}
      </form>
    </div>
  );
};

export default Login;
