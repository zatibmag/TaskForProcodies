import React from "react";
import { Text } from "./Text";
import "../Css/PaymentForm.css";

export function PaymentForm() {
  return (
    <div>
      <Text className="post-text" text="Enter details" />
      <div className="form-row">
        <input
          className="duo-form-input"
          type="text"
          id="firstName"
          placeholder="First name"
        />
        <input
          className="duo-form-input"
          type="text"
          id="lastName"
          placeholder="Last name"
        />
      </div>
      <div className="form-row">
        <input
          className="solo-form-input"
          type="text"
          id="street"
          placeholder="Street"
        />
      </div>
      <div className="form-row">
        <input
          className="duo-form-input"
          type="text"
          id="postalCode"
          placeholder="Postal code"
        />
        <input
          className="duo-form-input"
          type="text"
          id="city"
          placeholder="City"
        />
      </div>
      <div className="form-row">
        <input
          className="solo-form-input"
          type="text"
          id="phoneNumber"
          placeholder="Phone number"
        />
      </div>
      <div className="form-row">
        <input
          className="solo-form-input"
          type="email"
          id="email"
          placeholder="E-mail"
        />
      </div>
      <button type="submit">PROCEED TO PAYMENT</button>
    </div>
  );
}
