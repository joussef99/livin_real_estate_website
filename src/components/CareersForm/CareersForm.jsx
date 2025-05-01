// CareersForm.jsx
import React, { useState } from "react";
import "./CareersForm.css";

const titles = [
    'Sales fresh',
    'Junior property consultant' ,
    'Senior property consultant' ,
    'Sales Admin',
    "Team leader sales",
    'Fresh marketing ',
    'Junior marketing ',
    'Senior marketing ',
    'Team leader marketing' ,
    'HR coordinator',
    'Tiktok specialist',
];

function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
    file: null,
    photo: null,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.phone.trim() || !/^\d{6,15}$/.test(formData.phone))
      errs.phone = "Enter a valid phone number.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      errs.email = "Enter a valid email.";
    if (!formData.title) errs.title = "Please select a job title.";
    if (!formData.message.trim()) errs.message = "Message is required.";
    if (!formData.file) errs.file = "Resume file is required.";
    if (!formData.photo) errs.photo = "Profile photo is required.";
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
    console.log("Career form submitted:", formData);
  };

  return (
    <div className="flexColCenter paddings innerWidth r-wrapper">
      <div className="r-container">
        <div className="r-left">
          <div className="image-career">
            <img src="/value.png" alt="careers" />
          </div>
        </div>
        <div className="r-right">
          <div className="flexColStart paddings innerWidth r-head">
            <h1>Become a part of our family</h1>
            <span>Submit your information and we will get in touch.</span>
          </div>
          <div className="career-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <h2>Thank you!</h2>
                <p>
                  Your application has been submitted. <br /> We will contact
                  you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="career-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
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
                  <label htmlFor="title">Job Title</label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose a title --</option>
                    {titles.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.title && (
                    <span className="error">{errors.title}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="Message">Start Date!</label>
                  <textarea
                    name="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="file">Upload Resume</label>
                  <input
                    name="file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                  />
                  {errors.file && <span className="error">{errors.file}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="photo">Upload Profile Photo</label>
                  <input
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {errors.photo && (
                    <span className="error">{errors.photo}</span>
                  )}
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

export default CareersForm;
