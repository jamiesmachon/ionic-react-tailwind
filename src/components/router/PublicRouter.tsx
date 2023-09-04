import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router-dom";

import Login from "@/pages/login";
import Register from "@/pages/register";
import Apply from "@/pages/apply";
import ForgotPassword from "@/pages/forgot-password";
import ResetPassword from "@/pages/reset-password";

const PublicRouter = () => {
  console.log("PublicRouter");

  return (
    <IonRouterOutlet>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/apply" component={Apply} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
    </IonRouterOutlet>
  );
};

export default PublicRouter;
