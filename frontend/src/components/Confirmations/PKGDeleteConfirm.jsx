import React from "react";

export default function ConfirmationPopup({ isOpen, packageName, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
        <p className="mb-6">Do you really want to delete the service package <strong>{packageName}</strong>? This process cannot be undone.</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded-lg mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
