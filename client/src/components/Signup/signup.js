import './signup.css';
import React, {useState} from "react";
import { signup } from "../../backend";


// Signup component for the signup form
function Signup() {

    const [formValues, setFormValues] = useState({
        email: "",
        name: "",
        password: "",
        contact: Number,
        mission:"",
        vision:"",
        region:"", 
        orgtype:"",
        intervention:"",
        error: "",
        loading: false,
        success: false,
    });
// Destructuring values from the state
const { name, email, password, mission, vision, contact, region, orgtype, intervention, error, loading, success } = formValues;

// Handles changes in the input fields
const handleChange = name => event => {
    setFormValues({ ...formValues, error: false, [name]: event.target.value });
}

// Submits the form data to the backend
const onSubmit = async event => {
    event.preventDefault();
    setFormValues({ ...formValues, success: false, loading: true });

    // Placeholder for the signup function calling the backend
    signup({ name, email, password, mission, contact, vision, region, orgtype, intervention })
        .then(data => {
            if (data.error) {
                setFormValues({ ...formValues, error: data.error, loading: false, success: false });
            } else {
                setFormValues({ ...formValues, success: true });
            }
        })
        .catch();
}
// Displays error message if there's any
const errorMessage = () => {
    return (
        <div className='error-message' style={{ display: error ? "" : "none", color: "red" }}>
            {error}
        </div>
    );
}
// Displays loading message during form submission
const loadingMessage = () => {
    return (
        loading && (
            <div className="loading-message" style={{ display: error ? "" : "none", color: "red" }}>
                <div className="loading-spinner"></div>
                <p>Loading...</p>
            </div>
        )
    );
}

// Displays success message upon successful form submission
const successMessage = () => {
    return (
        success && (
            <div>
                <center><p className='login_redirect mt-2'>Account created successfully <b><a href='/login'>Login here</a></b></p></center>
            </div>
        )
    );
}

    return(
        <div className='form-container'>
            <div className='form-box'>
                <h2>Create an account</h2>
                {errorMessage()}
                {loadingMessage()}
                {successMessage()}
                <div className='form-group'>
                    <label htmlFor="name">Organization name</label>
                    <input type="text" id="name" name="name" onChange={handleChange("name")} required/>
                </div>
                {/* Input field for email */}
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange("email")} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="contact">Contact Number</label>
                    <input type="number" id="name" name="name" onChange={handleChange("contact")} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="vision">Vision</label>
                    <input type="text" id="name" name="vision" onChange={handleChange("vision")} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="mission">Mission</label>
                    <input type="text" id="name" name="mission" onChange={handleChange("mission")} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="region">Region</label>
                    <input type="text" id="name" name="region" onChange={handleChange("region")} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="orgtype">Organization type</label>
                    <input type="text" id="name" name="orgtype" onChange={handleChange("orgtype")} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="intervention">Intervention</label>
                    <input type="text" id="name" name="intervention" onChange={handleChange("intervention")} required/>
                </div>
                {/* Input field for password */}
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange("password")} required/>
                </div>
                {/* Signup button */}
                <div className="form-group-button">
                    <button onClick={onSubmit} className='signupButton'>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;