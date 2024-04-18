import { useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    setFormErrors(errors);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_0wuzpsi",
          "template_461i3f2",
          e.target,
          "JHmRBCSILCLTZZo-G"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED.. .", error.text);
          }
        );
      setShowSuccessPopup(true);
    }
  };
  const form = useState();
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center mx-auto">
        <form
          className="registration-form bg- black py-5 px-5 rounded-5 mt-5"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="error-message">{formErrors.name}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className={formErrors.number ? "error" : ""}
            />
            {formErrors.number && (
              <p className="error-message">{formErrors.number}</p>
            )}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Form submitted successfully!</p>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </>
  );
};
export default ContactUs;
