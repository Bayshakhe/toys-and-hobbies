import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProviders from "./providers/AuthProviders";
import { Toaster } from "react-hot-toast";
import Viewdetails from "./pages/ViewDetails/Viewdetails";
import PrivateRoute from "./routes/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster />
      {/* <PrivateRoute>
        <Viewdetails></Viewdetails>
      </PrivateRoute> */}
    </AuthProviders>
  </React.StrictMode>
);
