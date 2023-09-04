import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import "./Product.css";

import QuantityPicker from "@/components/QuantityPicker";
import TabNavigation from "@/components/TabNavigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Product: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <IonPage>
      <Header title="Product" />
      <IonContent fullscreen className="relative">
        <form className="quantity-picker">
          <div className="text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
            <div className="border border-gray-100 rounded-xl shadow-2xl p-8 bg-gradient-to-r from-green-400 via-blue-900 to-blue-400 text-white max-w-lg">
              <h1 className="text-2xl font-bold">
                Using TailwindCSS in Ionic with React
              </h1>
              <p className="mt-4">
                This is a <span className="font-bold">login page</span> that you
                can use <span className="font-bold">TailwindCSS</span> to style
                your Ionic React app.
              </p>
              <QuantityPicker
                quantity={quantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>
        </form>
        <TabNavigation />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Product;
