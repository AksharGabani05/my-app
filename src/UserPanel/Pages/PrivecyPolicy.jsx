// src/pages/PrivacyPolicy.js
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader"; // Import the Loader component
import './style/PrivecyPolicy.css'; // Import custom CSS for styling

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data or loading content)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a delay of 2 seconds
  }, []);

  if (loading) {
    return <Loader />; // Show the loader while loading
  }

  return (
    <div className="privacy-policy-container">
      <h1 className="text-center mb-5">Privacy Policy</h1>
      <div className="privacy-policy-content">
        <p>
          Welcome to our Privacy Policy page. Your privacy is critically important to us.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We collect various types of information for various purposes to provide and improve our services for you. This includes, but is not limited to:
        </p>
        <ul>
          <li>Personal Information such as your name, email address, and phone number.</li>
          <li>Usage data, including pages visited and time spent on the site.</li>
          <li>Cookies and tracking technologies.</li>
        </ul>

        <h3>How We Use Your Information</h3>
        <p>We use the collected data for various purposes:</p>
        <ol>
          <li>To provide and maintain our service.</li>
          <li>To notify you about changes to our service.</li>
          <li>To provide customer support.</li>
          <li>To monitor usage and improve the service.</li>
        </ol>

        <h3>Your Data Protection Rights</h3>
        <p>
          You have the right to access, update, or delete your personal data. Contact us if you wish to exercise any of these rights.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
