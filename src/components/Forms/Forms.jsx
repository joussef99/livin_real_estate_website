import React, { useState } from "react";
import "./Forms.css";
// Sample country codes — extend as needed
const countryCodes = [
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
];

// Areas for filtering — adjust to your actual list
const areas = [
  "New Cairo",
  "North Coast",
  "Ain El Sokhna",
  "New Capital",
  "6 October & Zayed",
  "Mostakbal City",
  "Red Sea",
];

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: countryCodes[0].code,
    phone: "",
    area: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      errs.email = "Enter a valid email.";
    if (!formData.phone.trim() || !/^\d{6,15}$/.test(formData.phone))
      errs.phone = "Enter a valid phone number.";
    if (!formData.area) errs.area = "Please select an area.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    console.log("Form submitted, submitted state:", true);
  };

  return (
    <div className="flexColCenter paddings innerWidth f-wrapper">
      <div className="f-container">
        <div className="f-left">
          <div className="image-container">
            <img src="/contact.jpg" alt="contact" />
          </div>
        </div>
        <div className="f-right">
          <div className="flexColStart paddings innerWidth f-head">
            <h1>Need Expert Advice ?!</h1>
            <span>
              Fill out the form and one of our property Consultants will contact
              you
            </span>
          </div>
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <h2>Thank you!</h2>
                <p>
                  Your request is considered.
                  <br /> One of our team members will contact you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <div className="phone-input">
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="123456789"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="area">Select Area</label>
                  <select
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose an area --</option>
                    {areas.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                  {errors.area && <span className="error">{errors.area}</span>}
                </div>

                <button type="submit" className="button">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forms;
