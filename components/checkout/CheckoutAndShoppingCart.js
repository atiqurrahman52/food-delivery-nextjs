
import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import CheckoutStep from "./CheckoutStep";
import PaymentStep from "./PaymentStep";
import ProgressTab from "./ProgressTab";
import ShoppingCartStep from "./ShoppingCartStep";



const CheckoutAndShoppingCart = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const next = () => {
    setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1);
  };
  const prev = () => {
    setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-4 lg:mb-8 relative">
        <Link href="/" className="absolute top-1/2 -translate-y-1/2 left-0">
          <CaretLeft size={24} />
          <i className="ph-arrow-left text-2xl text-primary p-6"></i>
        </Link>

        <Link href="/">
          <img src='/assets/image/logo/logo.webp' alt="" />
        </Link>
      </div>
      <ProgressTab currentStep={currentStep} />
      <ShoppingCartStep currentStep={currentStep} handleNext={next} />
      <CheckoutStep
        currentStep={currentStep}
        handlePrev={prev}
        handleNext={next}
      />
      <PaymentStep
        currentStep={currentStep}
        handlePrev={prev}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CheckoutAndShoppingCart;
