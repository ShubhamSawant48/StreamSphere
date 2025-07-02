import { BG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="relative">
      <img
        src={BG_URL}
        alt="Background Image"
        className="w-full h-screen"
      ></img>
      <form
        className="bg-black absolute top-40 left-[35%] w-4/12 h-max bg-opacity-80 text-white flex flex-col gap-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="px-10 pt-10 pb-4 text-start font-bold text-4xl">
          Sign In
        </h1>
        <input
          type="text"
          placeholder="Enter Your Email :"
          className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mt-2 mb-1 border border-solid-1 border-white"
        ></input>
        <input
          type="password"
          placeholder="Password :"
          className="rounded-md bg-gray-900 w-[80%] px-6 py-4 ml-9 mb-6 border border-solid-1 border-white"
        ></input>
        <button className="rounded-md bg-red-900 w-[80%] px-8 py-4 ml-9 my-2">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
