import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./ResetPassword.css";

const ResetPassword: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ResetPassword</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="relative">
        <div className="text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
          <div className="border border-gray-100 rounded-xl shadow-2xl p-8 bg-gradient-to-r from-green-400 via-blue-900 to-blue-400 text-white max-w-lg">
            <h1 className="text-2xl font-bold">
              Using TailwindCSS in Ionic with React
            </h1>
            <p className="mt-4">
              This is a <span className="font-bold">ResetPassword page</span>{" "}
              that you can use <span className="font-bold">TailwindCSS</span> to
              style your Ionic React app.
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;
