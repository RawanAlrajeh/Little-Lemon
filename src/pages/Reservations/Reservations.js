import React, { useState } from "react";
import Button from "../../components/Button/Button";
function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    peopleCount: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (value !== "") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handlePeopleCountChange = (value) => {
    setFormData({
      ...formData,
      peopleCount: Math.max(1, formData.peopleCount + value),
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form data submitted:", formData);
      // Here, you can send the formData to a server or handle it as needed.
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reservations</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="peopleCount"
            className="text-sm font-medium text-gray-700"
          >
            Number of People
          </label>
          <button
            type="button"
            onClick={() => handlePeopleCountChange(-1)}
            className="p-2 border rounded-md bg-gray-100"
            disabled={formData.peopleCount <= 1}
          >
            -
          </button>
          <input
            type="number"
            id="peopleCount"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            className="w-12 p-2 text-center border rounded-md"
          />
          <button
            type="button"
            onClick={() => handlePeopleCountChange(1)}
            className="p-2 border rounded-md bg-gray-100"
          >
            +
          </button>
        </div>
        <Button
          type="submit"
          variant="primary"
          className="w-full p-2 rounded-md"
        >
          Submit Reservation
        </Button>
      </form>
    </div>
  );
}

export default Reservations;
