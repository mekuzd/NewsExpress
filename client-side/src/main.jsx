import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Provider/Context";

const App = React.lazy(() => import("./App"));
const Signup = React.lazy(() => import("./Pages/SignUp"));
const Login = React.lazy(() => import("./Pages/Login"));
const ExploreLatest = React.lazy(() => import("./Pages/ExploreLatest"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/explorelatest",
    element: <ExploreLatest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
);
