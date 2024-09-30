import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmationPopup from "../../../components/Confirmations/CusDeleteConfirm";
import SideNavLinks from "../../../components/Dashboards/SideNavLinks/SideNavLinks";

function DisplayCustomer_Details({ user, index, onDelete }) {
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
    const shortId = `CUS ${_id.slice(-6)}`; // Shorten the ObjectId for display

    return (
        <>
            <tr
                key={_id}
                className={`border-t border-gray-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                    hover:bg-gray-200 active:bg-gray-300 transition duration-300 ease-in-out`}
            >
                <td className="px-2 py-4 text-center text-black">{shortId}</td>
                <td className="px-2 py-4 text-center text-black">{FirstName} {LastName}</td>
                <td className="px-2 py-4 text-center text-black">{Address}</td>
                <td className="px-2 py-4 text-center text-black">0{MobileNumber}</td>
                <td className="px-2 py-4 text-center text-black">{NIC}</td>
                <td className="px-2 py-4 text-center text-black">{Email}</td>
                <td className="text-center py-4 text-sm">
                    <Link to={`/cus_details_update/${_id}`}>
                        <button className="h-[40px] w-[70px] bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700 hover:shadow-gray-700 transition duration-300">
                            Update
                        </button>
                    </Link>

                    <button
                        className="h-[40px] w-[70px] my-1 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-700 hover:shadow-gray-700 transition duration-300"
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
