import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const Travel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null); // Store the selected data here
  const travelHistoryData = [
    {
      date: '2024-06-01',
      arrival: '10:00 AM',
      departure: '2:30 PM',
      duration: '4h 30m',
      from: 'New York (JFK)',
      to: 'Los Angeles (LAX)',
      transactionId: 'ABC123',
      orderId: 'XYZ456',
    },
    {
      date: '2024-06-10',
      arrival: '8:45 AM',
      departure: '12:15 PM',
      duration: '3h 30m',
      from: 'Chicago (ORD)',
      to: 'Miami (MIA)',
      transactionId: 'DEF789',
      orderId: 'PQR987',
    },
    // Add more travel history entries as needed
  ];
  

  const handleBlockClick = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  return (
    <div className='flex flex-col'>
    <div><Navbar/></div>
    <div className="bg-gradient-to-b from-orange-500 to-yellow-500 min-h-screen p-8 mt-12">
        {/* <h2 className="text-2xl font-semibold text-orange-500 mb-4">Travel History</h2> */}
      {travelHistoryData.map((data, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-50 rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:bg-gray-100 flex items-center justify-between"
          onClick={() => handleBlockClick(data)}
        >
          <div>
            <p className="text-gray-600">{data.date}</p>
            <p className="text-indigo-600 font-semibold">
              {data.from} to {data.to}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Arrival: {data.arrival}</p>
            <p className="text-gray-500">Departure: {data.departure}</p>
            <p className="text-gray-500">Duration: {data.duration}</p>
          </div>
          
        </div>
      ))}

      {/* Pop-up/modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur">
          {/* Modal content */}
          <div className="bg-white rounded-lg p-6 w-80">
            {/* <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body> */}
            <div className='font-bold'>Transaction Details</div>
              Transaction ID: {selectedData?.transactionId}
              <br />
              Order ID: {selectedData?.orderId}
            {/* </Modal.Body>
            <Modal.Footer>
           
            </Modal.Footer> */}
             <div
                // variant="secondary"
                onClick={() => setShowModal(false)}
                className="text-red-500 cursor-pointer"
            >
                Close
            </div>
          </div>
        </div>
      )}
    </div></div>
  );
};

export default Travel;
