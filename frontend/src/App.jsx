import "./App.css";
import "./styles/variables.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Root from "./ui/root/Root";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Root /> }]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
