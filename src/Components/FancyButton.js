// FancyButton.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../Styles/FancyButton.scss'; // Make sure this path is correct

const FancyButton = ({ text, to }) => {
  return (
    <button className="custom-btn btn-7">
      <Link to={to} className="fancy-button-link">{text}</Link> {/* Use Link here */}
    </button>
  );
};

export default FancyButton;