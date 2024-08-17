import React, { useState, useMemo } from 'react';
import NavBar from "./NavBar"
import { Datepicker} from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

function ScheduleAppointment() {
    const [showModal, setShowModal] = useState(false);
    const [dateTime, setDateTime] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');

    // Define mentor's availability and invalid time slots
    const myLabels = useMemo(() => [
        {
            start: '2024-08-16T09:00',
            end: '2024-08-16T17:00',
            textColor: '#e1528f',
            title: 'Available'
        }
    ], []);

    const myInvalid = useMemo(() => [
        {
            start: '2024-08-17T08:00',
            end: '2024-08-17T13:00'
        },
        {
            start: '2024-08-17T15:00',
            end: '2024-08-17T17:00'
        },
        {
            start: '2024-08-17T19:00',
            end: '2024-08-17T20:00'
        }
    ], []);

    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if the selected dateTime is in the invalid time slots
        if (myInvalid.some(slot => new Date(dateTime) >= new Date(slot.start) && new Date(dateTime) <= new Date(slot.end))) {
            setError('Selected time slot is unavailable. Please choose another time.');
            return;
        }
        // Clear the error and handle the form submission
        setError('');
        console.log('Appointment scheduled:', { dateTime, notes });
        setShowModal(false);
    };
  
    return (
      <>
       <button onClick={() => setShowModal(true)}>Schedule Appointment</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <label>Date and Time:</label>
                            <Datepicker
                                controls={['calendar', 'timegrid']}
                                min="2024-08-16T00:00"
                                max="2025-02-17T00:00"
                                minTime="08:00"
                                maxTime="19:59"
                                stepMinute={60}
                                labels={myLabels}
                                invalid={myInvalid}
                                onChange={(event) => setDateTime(event.value)}
                                value={dateTime}
                            />
                            {error && <p className="error">{error}</p>}
                            <label>Notes:</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                            <div className="modal-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
  }
  
  export default ScheduleAppointment;