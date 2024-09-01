import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmationPopup from "../../../components/Confirmations/CusDeleteConfirm";
import SideNavLinks from "../../../components/Dashboards/SideNavLinks/SideNavLinks";

function DisplayCustomer_Details({ user, onDelete }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCus, setSelectedCus] = useState("");
    const navigate = useNavigate();

    const handleDeleteClick = (cusName) => {
        setSelectedCus(cusName);
        setIsPopupOpen(true);
    };

    const handleConfirmDelete = async () => {
        await deleteHandler();
        setIsPopupOpen(false);
        onDelete(); // Notify parent component to refetch or update the list
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const deleteHandler = async () => {
        try {
            console.log("Deleting user with ID:", user._id); // Log the ID
            await axios.delete(`http://localhost:5000/AdminCustomers/${user._id}`);
            console.log("User deleted successfully");
        } catch (error) {
            console.error("Error deleting user:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                console.error("Request data:", error.request);
            } else {
                console.error("Error message:", error.message);
            }
        }
    };

    const { _id, FirstName, LastName, Address, MobileNumber, NIC, Email } = user;

    return (
        <>
            <tr className="border-t border-gray-300">
                <td className="px-2 py-4 text-center text-black">CUS {`00${_id.slice(-6)}`}</td>
                <td className="px-2 py-4 text-center text-black">{FirstName} {LastName}</td>
                <td className="px-2 py-4 text-center text-black">{Address}</td>
                <td className="px-2 py-4 text-center text-black">{MobileNumber}</td>
                <td className="px-2 py-4 text-center text-black">{NIC}</td>
                <td className="px-2 py-4 text-center text-black">{Email}</td>
                <td className="text-center py-4 text-sm">
                    <button className=" mr-1 h-[40px] w-[70px] bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 hover:shadow-gray-700 hover:duration-300">
                        <SideNavLinks linkName="Update" url={`/cus_details_update/${_id}`} />
                    </button>
                    <button
                        className="h-[40px] w-[70px] my-1 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-700 hover:shadow-gray-700 hover:duration-300"
                        onClick={() => handleDeleteClick(`${FirstName} ${LastName}`)}
                    >
                        Delete
                    </button>
                </td>
            </tr>

            {isPopupOpen && (
                <ConfirmationPopup
                    isOpen={isPopupOpen}
                    cusName={selectedCus}
                    onClose={handleClosePopup}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </>
    );
}

export default DisplayCustomer_Details;
