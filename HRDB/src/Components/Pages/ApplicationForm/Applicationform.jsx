import React, { useState } from "react";
import logo from "../../../Images/newlogo.png";
import Modal from "./Modal";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    position: "",
    location: "",
    resume: null,
    dob: "",
    yearOfPassing: "",
    phoneNumber: "",
    email: "",
    linkedin: "",
    experience: "No",
    experienceDuration: "",
    currentCTC: "",
    expectedCTC: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const positions = [
    "Sales Executive",
    "Front-end Developer",
    "Back-end Developer",
    "Human Resource",
  ];
  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleExperienceChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      experience: value,
    }));
    if (value === "Yes") {
      setIsModalOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    // Add logic to update formData with modal data if needed
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center mt-10">
      <div className="w-4/5 md:w-3/5 lg:w-2/5 bg-gray-100 mx-auto shadow-lg p-8 rounded-xl md:my-20 lg:my-5 mt-20">
        {" "}
        {/* Updated margin here */}
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-center flex items-center justify-center">
          <img
            src={logo}
            alt="company logo"
            className="h-6 sm:h-8 md:h-10 lg:h-12 mr-2"
          />
          Job Application
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
          {/* Section 1 */}
          <div className="w-full md:w-1/2 px-4 mb-5">
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Qualification */}
            <div className="mb-5">
              <label
                htmlFor="qualification"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Position Applied For */}
            <div className="mb-5">
              <label
                htmlFor="position"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Position Applied For
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              >
                <option value="">Select Position</option>
                {positions.map((position, index) => (
                  <option key={index} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="mb-5">
              <label
                htmlFor="location"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Resume Upload */}
            <div className="mb-5">
              <label
                htmlFor="resume"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-5">
              <label
                htmlFor="dob"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full md:w-1/2 px-4 mb-5">
            {/* Year of Passing */}
            <div className="mb-5">
              <label
                htmlFor="yearOfPassing"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Year of Passing
              </label>
              <select
                id="yearOfPassing"
                name="yearOfPassing"
                value={formData.yearOfPassing}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Number */}
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* LinkedIn */}
            <div className="mb-5">
              <label
                htmlFor="linkedin"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Adhaarcard Upload */}
            <div className="mb-5">
              <label
                htmlFor="Adhaarcard"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Upload Adhaarcard
              </label>
              <input
                type="file"
                id="Adhaarcard"
                name="Adhaarcard"
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Experience */}
            <div className="mb-5">
              <label
                htmlFor="experience"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Do you have prior experience?
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleExperienceChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="w-full text-center">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <Modal
          onSubmit={handleModalSubmit}
          onClose={handleModalClose}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default Form;
