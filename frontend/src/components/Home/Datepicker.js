import React, { useState } from 'react';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <div className="relative">
      <input
        type="date"
        className="w-full rounded-md border border-gray-300 h-14 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
      />
      <div className="absolute top-0 right-0 mt-3 mr-3 pointer-events-none">
        
      </div>
    </div>
  );
}

export default DatePicker;