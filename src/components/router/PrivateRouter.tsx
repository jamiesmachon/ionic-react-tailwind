import { IonRouterOutlet } from "@ionic/react";
import { useLocation, Redirect, Route } from "react-router-dom";

import useAuth from "@/hooks/UseAuth";

import Home from "@/pages/home";
import Product from "@/pages/product";

const PrivateRouter = () => {
  console.log("PrivateRouter");

  const { auth } = useAuth();
  const location = useLocation();

  console.log("auth: ", auth);

  return (
    <IonRouterOutlet>
      {auth.isAuthenticated ? (
        <>
          <Route path="/" component={Home} />
          <Route path="/product" component={Product} />
        </>
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </IonRouterOutlet>
  );
};

export default PrivateRouter;
