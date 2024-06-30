import React from 'react';
import Navbar from '../Navbar/Navbar';
const Booking = () => {
  return (
    <div>
        <Navbar/>
     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-500 to-yellow-500">
        
    <div className="container mt-5 bg-gray-100 shadow-lg shadow-gray-600 rounded-lg px-8 pt-6 pb-8 mb-8 mx-auto">
        
      <div className="card ">
        <div className="card-header">
          <h3 className="text-gray-700 font-bold text-xl">Flight Booking Confirmation</h3>
        </div>
        <div className="card-body">
          <form id="confirmationForm">
            {/* Flight Details */}
            <div className="mb-4 ">
              <label htmlFor="flightNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Flight Number:
              </label>
              <input
                type="text"
                id="flightNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="AB123"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="departureDate" className="block text-gray-700 text-sm font-bold mb-2">
                Departure Date:
              </label>
              <input
                type="date"
                id="departureDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="2024-06-15"
              />
            </div>
            {/* ... (other form fields) ... */}
            {/* Passenger Details */}
            <div className="mb-4">
              <label htmlFor="passengerName" className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="passengerName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="Cheeku"
              />
            </div>
            {/* ... (other form fields) ... */}
            {/* Payment Details */}
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">
                Payment Method:
              </label>
              <input
                type="text"
                id="paymentMethod"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="Credit Card"
              />
            </div>
            {/* ... (other form fields) ... */}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
         </div>
      </div>
    </div></div>
  );
};

export default Booking;
