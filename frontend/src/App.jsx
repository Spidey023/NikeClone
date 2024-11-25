import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./ui/root/Root";
import HomePage from "./pages/home";

import ProductDetail from "./components/ProductDetails/ProductDetails";
import NewPage from "./pages/NewPage";
import EditPage from "./pages/EditPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: ":prodId", element: <ProductDetail /> },
        { path: ":prodId/edit", element: <EditPage /> },
        {
          path: "new",
          element: <NewPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
