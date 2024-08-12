import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-5">
        <h2 className="text-xl font-semibold mb-4">Experience Details</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-5">
            <label
              htmlFor="experienceDuration"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Duration of Experience
            </label>
            <input
              type="text"
              id="experienceDuration"
              name="experienceDuration"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="currentCTC"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Current CTC
            </label>
            <input
              type="text"
              id="currentCTC"
              name="currentCTC"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="expectedCTC"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Expected CTC
            </label>
            <input
              type="text"
              id="expectedCTC"
              name="expectedCTC"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
