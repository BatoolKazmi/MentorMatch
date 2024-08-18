import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import ScheduleAppointment from './ScheduleAppointment'; // Adjust the import path

function ScheduleAppointmentLink() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    console.log("handleCloseModal function called"); 
    setShowModal(false);
  };
  console.log("Passing onClose function:", handleCloseModal);

  console.log("Rendering ScheduleAppointmentLink component");
  return (
    <>
      <div className="icon-container" onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faCalendarDays} size="5x" className="icon" />
        <p>Schedule an Appointment</p>
      </div>

      {showModal && (
        <ScheduleAppointment onClose={handleCloseModal} />
      )}
    </>
  );
}

export default ScheduleAppointmentLink;
