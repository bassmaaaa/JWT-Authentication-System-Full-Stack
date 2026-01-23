import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth.service";
import type { JSX } from "react";

type Props = {
  children: JSX.Element;
};

export default function PublicRoute({ children }: Props) {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
