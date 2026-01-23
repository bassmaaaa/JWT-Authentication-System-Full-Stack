import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth.service.tsx";
import type { JSX } from "react";

type Props = {
  children: JSX.Element;
};

export default function ProtectedRoute({ children }: Props) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
