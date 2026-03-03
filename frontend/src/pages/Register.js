import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/auth/register", form);
        alert("Register Successfuly");
        navigate("/login");
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder= "Email"
                onChange={e => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Password"
                onChange={e => setForm({ ...form, password: e.target.value })} />
                <button>Register</button>
            </form>
        </div>
    );

}


export default Register;