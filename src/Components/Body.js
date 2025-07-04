import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import GeminiSearch from "./GeminiSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/browse",
      element: <GeminiSearch />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
