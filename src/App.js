import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
    {
        path: "/points-counter",
        element:  <Main />,
    },
    {
        path: "/points-counter/admin",
        element:  <Admin />,
    },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
