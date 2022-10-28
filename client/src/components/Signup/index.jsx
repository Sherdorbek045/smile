import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";


const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5050/api/users";
      const { data: res } = await axios.post(url, data);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }
  return (
    <div className="container">
            <h1>Register</h1>
            {error && <div className="error">{error}</div>}
            <form onSubmit={onSubmitForm} className="input-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="email">Email:</label>
                <input type="text"
                    name="email"
                    id="email"
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => onChange(e)}
                />
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
            <Link to="/login">Login</Link>
        </div>
  )
}

export default Signup;
