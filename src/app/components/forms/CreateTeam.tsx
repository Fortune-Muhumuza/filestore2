'use client'
import React, { useState } from "react";

const TeamFormModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    members: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Create Team
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-1/3 shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold">Create a New Team</h2>
              <button
                className="text-white hover:text-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Team Name */}
              <div>
                <label htmlFor="teamName" className="block text-gray-700 font-medium">
                  Team Name
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter team name"
                  required
                />
              </div>

              {/* Select Members */}
              <div>
                <label htmlFor="members" className="block text-gray-700 font-medium">
                  Select Members
                </label>
                <select
                  id="members"
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="" disabled>
                    Choose members
                  </option>
                  <option value="Member 1">Member 1</option>
                  <option value="Member 2">Member 2</option>
                  <option value="Member 3">Member 3</option>
                </select>
              </div>

              {/* Team Description */}
              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium">
                  Team Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter team description"
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamFormModal;
