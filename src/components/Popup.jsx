import React from 'react';

const Popup = ({ onClose }) => {

    const message = 'We regret to inform you that due to political election-related matters, the event has been rescheduled from February 28th to March 7th. We apologize for any inconvenience this may cause and appreciate your understanding.';
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-blue-300 p-6 rounded-lg shadow-lg text-center sm:w-screen md:w-96">
                <p className="mb-6 text-black">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-purple-500 text-white px-4 py-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;