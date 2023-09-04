import { Link } from "react-router-dom";
import { home, balloon } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { isPlatform } from "@ionic/react";

const TabNavigation = () => {
  // only show tabs on non-desktop devices
  if (isPlatform("desktop")) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-300">
      <div className="flex justify-center space-x-4">
        <Link
          to="/"
          className="px-4 py-2 border rounded bg-blue-500 text-white"
        >
          <IonIcon icon={home} />
        </Link>
        <Link
          to="/product"
          className="px-4 py-2 border rounded bg-blue-500 text-white"
        >
          <IonIcon icon={balloon} />
        </Link>
      </div>
    </div>
  );
};

export default TabNavigation;
