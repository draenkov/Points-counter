import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <Main />,
    },
    {
        path: "/admin",
        element:  <Admin />,
    },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
