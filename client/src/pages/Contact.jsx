import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    contactMessage: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be in the format 803-803-8033.";
    }
    if (!formData.contactMessage)
      newErrors.contactMessage = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        contactMessage: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="contact p-8 bg-black w-full">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">
            Contact Us!
          </h1>
          <div
            style={{ backgroundColor: "#322e2e" }}
            className="contact-container max-w-lg mx-auto p-8 shadow-md rounded-lg w-full"
          >
            {isSubmitted && (
              <div className="success-message text-green-500 text-center mb-4">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form space-y-4">
              <div className="input-field">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  type="text"
                  required
                  className="w-full p-2 border bg-white rounded"
                />
                {errors.firstName && (
                  <div className="error-message text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="input-field">
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  type="text"
                  required
                  className="w-full p-2 border bg-white rounded"
                />
                {errors.lastName && (
                  <div className="error-message text-red-500 text-sm mt-1">
                    {errors.lastName}
                  </div>
                )}
              </div>
              <div className="input-field">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  required
                  className="w-full p-2 border bg-white rounded"
                />
                {errors.email && (
                  <div className="error-message text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="input-field">
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  type="tel"
                  required
                  className="w-full p-2 border bg-white rounded"
                />
                {errors.phoneNumber && (
                  <div className="error-message text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>
              <div className="input-field">
                <textarea
                  name="contactMessage"
                  value={formData.contactMessage}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full p-2 border bg-white rounded"
                ></textarea>
                {errors.contactMessage && (
                  <div className="error-message text-red-500 text-sm mt-1">
                    {errors.contactMessage}
                  </div>
                )}
              </div>
              <button
                id="submitFormBtn"
                type="submit"
                className="bg-red-700 text-white h-10 w-full rounded-lg border-none cursor-pointer transition-all duration-500 ease-in-out z-10 m-2 hover:rounded-[60px_0px_60px_0px] hover:bg-white hover:text-red-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
