import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Header = (props: { title: string }) => {
  return (
    <>
      NAVIGATION BAR
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
