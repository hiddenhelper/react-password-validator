import React, { useState } from "react";

const PasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [validationResult, setValidationResult] = useState([]);

  // handle input values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit button
  const handleSubmit = () => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/;
    let errorMsg = [];

    if (formData.password !== formData.confirmPassword) {
      errorMsg.push('Passwords should be matched.');
    }

    if (formData.password.length < 6) {
      errorMsg.push('Password should have a min length of 6 characters.');
    }

    if (!uppercaseRegex.test(formData.password)) {
      errorMsg.push('Password should have at least 1 uppercase character.');
    }
    
    if (!lowercaseRegex.test(formData.password)) {
      errorMsg.push('Password should have at least 1 lowercase character.');
    }

    if (!numberRegex.test(formData.password)) {
      errorMsg.push('Password should have at least 1 number.');
    }

    if (!specialCharRegex.test(formData.password)) {
      errorMsg.push('Password should have at least 1 special character.');
    }

    setValidationResult(errorMsg.length > 0 ? errorMsg : ['Success']);

  }

  return (
    <>
      <input
        type="password"
        name="password"
        placeholder="password"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        required
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
      {validationResult.map((msg) => (<p>{msg}</p>))}
    </>
  );
};

export default PasswordForm;
