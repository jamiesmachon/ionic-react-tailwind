import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { add, remove } from "ionicons/icons";

interface QuantityPickerProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
}

const QuantityPicker: React.FC<QuantityPickerProps> = ({
  quantity,
  onChange,
}) => {
  const handleIncrement = () => {
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      onChange(newQuantity);
    }
  };

  console.log("QuantityPicker quantity: ", quantity);

  return (
    <div className="quantity-picker">
      <IonButton onClick={handleDecrement}>
        <IonIcon icon={remove} />
      </IonButton>
      <input
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        value={quantity}
        onChange={handleInputChange}
      />
      <IonButton onClick={handleIncrement}>
        <IonIcon icon={add} />
      </IonButton>
    </div>
  );
};

export default QuantityPicker;
