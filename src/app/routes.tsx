import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "./components/login";
import { Layout } from "./components/layout";
import { Dashboard } from "./components/dashboard";
import { Projetos } from "./components/projetos";
import { Previsoes } from "./components/previsoes";
import { Bugs } from "./components/bugs";
import { Equipe } from "./components/equipe";
import { Configuracoes } from "./components/configuracoes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "projetos",
        element: <Projetos />,
      },
      {
        path: "previsoes",
        element: <Previsoes />,
      },
      {
        path: "bugs",
        element: <Bugs />,
      },
      {
        path: "equipe",
        element: <Equipe />,
      },
      {
        path: "configuracoes",
        element: <Configuracoes />,
      },
    ],
  },
]);