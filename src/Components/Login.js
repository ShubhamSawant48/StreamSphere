import { BG_URL } from "../utils/constants";
import { useRef, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

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
            useRef={name}
            type="text"
            placeholder="Enter Your Name"
            className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mt-2 border border-solid-1 border-white"
          ></input>
        )}
        <input
          useRef={email}
          type="text"
          placeholder="Enter Your Email"
          className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mt-1 mb-1 border border-solid-1 border-white"
        ></input>
        <input
          useRef={password}
          type="password"
          placeholder="Password"
          className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mb-6 border border-solid-1 border-white"
        ></input>
        <button className="rounded-md bg-red-900 w-[80%] px-8 py-4 ml-9 my-2">
          Sign In
        </button>
        {!isSignIn && (
          <h3 className="mb-10">
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
          <h3 className="mb-10">
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
      {console.log(name)}
    </div>
  );
};

export default Login;
