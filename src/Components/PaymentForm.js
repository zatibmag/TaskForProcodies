import React from "react";
import { Heading } from "./Heading";
import "../Css/PaymentForm.css";
import { Button } from "./Button";
import { Input } from "./Input";
import { Image } from "./Image";
import certificates from "../Images/certificates.png";

export function PaymentForm() {
  return (
    <div className="form-border">
      <Heading className="form-heading" text="Enter details" />
      <div className="form-row">
        <Input id="firstName" placeholder="First name" />
        <Input id="lastName" placeholder="Last name" />
      </div>
      <div className="form-row">
        <Input id="street" placeholder="Street" />
      </div>
      <div className="form-row">
        <Input id="postalCode" placeholder="Postal code" />
        <Input id="city" placeholder="City" />
      </div>
      <div className="form-row">
        <Input id="phoneNumber" placeholder="Phone number" />
      </div>
      <div className="form-row">
        <Input type="email" id="email" placeholder="E-mail" />
      </div>
      <Button
        className="submit-button"
        type="submit"
        text="PROCEED TO PAYMENT"
      />
      <div className="image-center">
        <Image className="form-image" src={certificates} alt="certificates" />
      </div>
    </div>
  );
}
