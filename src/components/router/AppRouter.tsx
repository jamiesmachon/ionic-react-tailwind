import { IonRouterOutlet } from "@ionic/react";
import { useLocation, Route } from "react-router-dom";
import RouteGuard from "./RouteGuard";

import useAuth from "@/hooks/UseAuth";

import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import NotFound from "@/pages/not-found";

import Login from "@/pages/login";
import Register from "@/pages/register";
import Apply from "@/pages/apply";
import ForgotPassword from "@/pages/forgot-password";
import ResetPassword from "@/pages/reset-password";

import Home from "@/pages/home";
import Product from "@/pages/product";

const AppRouter = () => {
  console.log("AppRouter");

  const { auth } = useAuth();
  const location = useLocation();

  console.log("auth: ", auth);

  return (
    <IonRouterOutlet>
      {/* PUBLIC ROUTES */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/apply" component={Apply} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      {/* PRIVATE ROUTES */}
      <RouteGuard
        path="/"
        component={Home}
        isAuthenticated={auth.isAuthenticated}
      />
      <RouteGuard
        path="/product"
        component={Product}
        isAuthenticated={auth.isAuthenticated}
      />

      {/* CATCH ALL */}
      <Route component={NotFound} />
    </IonRouterOutlet>
  );
};

export default AppRouter;
