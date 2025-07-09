import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { toggleGeminiBtn } from "../utils/geminiSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayname: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.config.lang);
  const toggleGeminiBtnInfo = useSelector(
    (store) => store.gemini.showGeminiBtn
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleToggleGeminiBtn = () => {
    dispatch(toggleGeminiBtn());
  };

  return (
    <div className="h-20 absolute inset-0 bg-gradient-to-b from-black flex justify-between">
      <img
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
        className="w-60 h-20 ml-20 mt-2"
      ></img>
      {user && (
        <div className="flex gap-4">
          {
            <select>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option>{lang.name}</option>
              ))}
            </select>
          }
          <Link to={"/browse"}>
            <button
              className="bg-purple-600 font-bold text-white rounded-lg px-3 my-4 py-3"
              onClick={handleToggleGeminiBtn}
            >
              {toggleGeminiBtnInfo ? "Home" : "Gemini Search"}
            </button>
          </Link>
          <button
            className="bg-red-700 text-white font-bold rounded-lg px-3 my-4 hover:text-black "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <img
            src={user.photoURL}
            alt="user profile photo"
            className="w-30 h-15 my-2 rounded-full"
          ></img>
        </div>
      )}
    </div>
  );
};

export default Header;
