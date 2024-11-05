import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
function ForgotPassword() {
  
  const initialValues = { username: " ", email: " ", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log("Submitted!")
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <h2></h2>
        <hr />
          <div className="field">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <label htmlFor="recovery-mode"> Send code to email to recover your account!</label>
  

          <button className="button  right" type='submit'>Send the code</button>
      </form>
    </div>
  );
}

export default ForgotPassword

