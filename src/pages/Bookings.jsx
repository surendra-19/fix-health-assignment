import React, { useState } from 'react';
import '../styles/Bookings.css';
import { motion } from 'framer-motion';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    chiefComplaints: '',
    previousExperience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      phoneNumber: '',
      age: '',
      city: '',
      chiefComplaints: '',
      previousExperience: '',
    });
  };

  return (
    <div className="booknowContainer">
      <div className="booknowWrapper">
        <h2 className="booknowTitle">Book For an Appointment</h2>
        <form className="booknowForm" onSubmit={handleSubmit}>
          {Object.keys(formData).map((field, index) => (
            <motion.input
              key={field}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              type={field === "phoneNumber" ? "tel" : field === "age" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="booknowInput"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required
            />
          ))}
          <motion.button
            type="submit"
            className="booknowButton"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 110, delay: 0.6, ease: "easeInOut" }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
