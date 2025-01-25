import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Contact.css"; // External stylesheet

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this URL with your API endpoint
      const response = await fetch("https://your-api-endpoint.com/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send the message. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container">
      <ToastContainer />

      {/* Top Location Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279889218!2d-74.2598679014852!3d40.69767006493944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5c71b65b1%3A0x48e77a8b90aaf0e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1695637762821!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-grid pt-5">
        {/* Form Section */}
        <div className="form-section">
          <h2>Tell Us Your Project</h2>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                className="form-control"
                placeholder="Name *"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-row">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              className="form-control"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram anteposuerit litterarum formas human.
          </p>

          <ContactItem
            iconPath="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            additionalPath="M9 22 9 12 15 12 15 22"
            label="Address:"
            value="No 40 Baria Street 133/2 NewYork City"
          />
          <ContactItem
            iconPath="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            additionalPath="M22,6 12,13 2,6"
            label="E-mail:"
            value="info@yourdomain.com"
          />
          <ContactItem
            iconPath="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            label="Phone:"
            value="+88013245657"
          />
          <ContactItem
            iconPath="M12 12m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0"
            additionalPath="M12 6 12 12 16 14"
            label="Working Hours:"
            value="Monday – Saturday: 08AM – 22PM"
          />
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ iconPath, additionalPath, label, value }) => (
  <div className="contact-item">
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPath}></path>
      {additionalPath && <polyline points={additionalPath}></polyline>}
    </svg>
    <div className="contact-text">
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  </div>
);

export default Contact;
