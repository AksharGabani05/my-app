// src/pages/RefundPolicy.js
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader"; // Import the Loader component

const RefundPolicy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching or rendering content)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  if (loading) {
    return <Loader />; // Show the loader while loading
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Refund Policy</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p>
            Thank you for shopping with us. If you are not entirely satisfied
            with your purchase, we’re here to help.
          </p>

          <h3>Returns</h3>
          <p>
            You have <strong>30 calendar days</strong> to return an item from
            the date you received it. To be eligible for a return:
          </p>
          <ul>
            <li>The item must be unused and in the same condition you received it.</li>
            <li>The item must be in its original packaging.</li>
            <li>You need to provide the receipt or proof of purchase.</li>
          </ul>

          <h3>Refunds</h3>
          <p>
            Once we receive your item, we will inspect it and notify you of the
            status of your refund. If your return is approved, we will initiate
            a refund to your original method of payment. The time it takes for
            the refund to reflect will depend on your card issuer’s policies.
          </p>

          <h3>Shipping</h3>
          <p>
            You will be responsible for paying your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you
            receive a refund, the cost of return shipping will be deducted from
            your refund.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about our refund policy, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
            <li>Phone: +1 234 567 890</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
