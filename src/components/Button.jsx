// Button.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // Make sure you create this CSS file for styles

const Button = ({
  type = "button",
  children,
  className = "",
  variant = "primary", // Example variants: primary, secondary, outline, etc.
  size = "medium",     // Example sizes: small, medium, large
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      disabled={disabled}
      {...props} // Allows passing additional props like 'onClick' when used in different places
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  className: "",
  variant: "primary",
  size: "medium",
  disabled: false,
};

export default Button;
