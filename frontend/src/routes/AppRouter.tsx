import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
//import Dashboard from "../pages/Dashboard";

import Register from "../pages/Register";
import PublicRoute from "../guards/PublicRoute";
import ProtectedRoute from "../guards/ProtectedRoute";

//const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
 // const { token } = useAuth();
  //return token ? children : <Navigate to="/login" replace />;
//};

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
         {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
