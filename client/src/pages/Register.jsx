import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    cell_num: "",
    dob: "",
    type: "",
    visit_date: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {

    // setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate inputs
    let errors = {};

    if (!inputs.fname.trim()) {
      setError('First name is required');
      return null;
    }

    if (!inputs.lname.trim()) {
      setError('Last name is required');
      return null;
    }

    if (!inputs.gender.trim()) {
      setError('Gender is required');
      return null;
    }

    if (!inputs.email.trim()) {
      setError('Email is required');
      return null;
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      setError('Email address is invalid');
      return null;
    }

    if (!inputs.password.trim()) {
      setError('Password is required');
      return null;
    } else if (inputs.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return null;
    }

    if (!inputs.street.trim()) {
      setError('Street address is required');
      return null;
    }

    if (!inputs.city.trim()) {
      setError('City is required');
      return null;
    }

    if (!inputs.state.trim()) {
      setError('State is required');
      return null;
    }

    if (!inputs.zipcode.trim()) {
      setError('Zip code is required');
    } else if (!/^\d{5}(?:[-\s]\d{4})?$/.test(inputs.zipcode)) {
      setError('Zip code is invalid');
      return null;
    }

    if (!inputs.country.trim()) {
      setError('Country is required');
      return null;
    }

    if (!inputs.cell_num.trim()) {
      setError('Cell phone number is required');
      return null;
    } else if (!/^\d{10}$/.test(inputs.cell_num)) {
      setError('Cell phone number is invalid');
      return null;
    }

    if (!inputs.dob.trim()) {
      setError('Date of birth is required');
      return null;
    }

    if (!inputs.type.trim()) {
      setError('Type is required');
      return null;
    }

    if (!inputs.visit_date.trim()) {
      setError('Visit date is required');
      return null;
    }

    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res.body);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <label className="registerLabel" htmlFor="fname">First Name</label>
        <input
          required
          type="text"
          placeholder="fname"
          name="fname"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="lname">Last Name</label>
        <input
          required
          type="text"
          placeholder="lname"
          name="lname"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="gender">Gender</label>
        <input
          required
          type="text"
          placeholder="gender"
          name="gender"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="email">Email</label>
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="password">Password</label>
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="street">Street</label>
        <input
          required
          type="text"
          placeholder="street"
          name="street"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="city">City</label>
        <input
          required
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="state">State</label>
        <input
          required
          type="text"
          placeholder="state"
          name="state"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="zipcode">Zipcode</label>
        <input
          required
          type="text"
          placeholder="zipcode"
          name="zipcode"
          pattern="[0-9]*"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="country">Country</label>
        <input
          required
          type="text"
          placeholder="country"
          name="country"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="cell_num">Cell Number</label>
        <input
          required
          type="tel"
          placeholder="cell_num"
          name="cell_num"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="dob">Date of Birth</label>
        <input
          required
          type="date"
          placeholder="date of birth"
          name="dob"
          onChange={handleChange}
        />
        <label className="registerLabel" htmlFor="type">Type</label>
        <select
          required
          name="type"
          value={inputs.type}
          onChange={handleChange}
        >
          <option name="type" value="">please select a type</option>
          <option name="type" value="Individual">individual</option>
          <option name="type" value="Group">group</option>
          <option name="type" value="Member">member</option>
          <option name="type" value="School">student</option>
        </select>
        <label className="registerLabel" htmlFor="visit_date">Visit Date</label>
        <input
          required
          type="date"
          placeholder="visit date"
          name="visit_date"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
