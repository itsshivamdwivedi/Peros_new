import React from 'react'

// pages/session-expired.js

const SessionExpired = () => (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-red-600">Session Expired</h1>
        <p className="mt-4">Your payment session has expired. Please try again.</p>
        <a
          href="/checkout"
          className="mt-4 inline-block text-green-500 hover:text-green-600 font-semibold"
        >
          Go back to Checkout
        </a>
      </div>
    </div>
  );
  
  export default SessionExpired;
  