import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <IonReactRouter>
      <AuthProvider>
        <IonRouterOutlet>
          <Route path="/*" component={App} />
        </IonRouterOutlet>
      </AuthProvider>
    </IonReactRouter>
  </React.StrictMode>
);
