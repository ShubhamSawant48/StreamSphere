import { useDispatch } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";

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

  return (
    <div className="h-20 absolute inset-0 bg-gradient-to-b from-black">
      <img
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
        className="w-60 h-20 ml-20 mt-2"
      ></img>
    </div>
  );
};

export default Header;
