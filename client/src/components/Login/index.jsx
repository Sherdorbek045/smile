import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5050/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
      toast.success(res.message);
      setAuth(true)
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
            <h1>Login</h1>
            {error && <div className="error">{error}</div>}
            <form onSubmit={onSubmitForm} className="input-form">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => onChange(e)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    onChange={(e) => onChange(e)}
                />
                <button type="submit" className="submit-button">Sign In</button>
            </form>
        </div>
  )
}

export default Login;
