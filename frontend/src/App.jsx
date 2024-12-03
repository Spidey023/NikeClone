import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LoginPage } from "./shared/pages/LoginPage";
import { AdminRoutes } from "./shared/pages/AdminRoute";
import { UserRoute } from "./shared/pages/UserRoute";
import ProtectedRoute from "./shared/components/protectedroute/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    // { path: "/", element: <ProtectedRoute /> },

    // {
    //   path: "/admin",
    //   element:
    //     loginState.isAuthenticated && loginState.role == "Admin" ? (
    //       <AdminRoutes />
    //     ) : (
    //       <Navigate to="/login" />
    //     ),
    // },

    // {
    //   path: "/user",
    //   element:
    //     loginState.isAuthenticated && loginState.role == "User" ? (
    //       <UserRoute />
    //     ) : (
    //       <Navigate to="/login" />
    //     ),
    // },    OR thre below
    {
      path: "/admin",
      element: (
        <ProtectedRoute requiredRole="Admin">
          <AdminRoutes />
        </ProtectedRoute>
      ),
    },
    {
      path: "/user",
      element: (
        <ProtectedRoute requiredRole="User">
          <UserRoute />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <LoginPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
