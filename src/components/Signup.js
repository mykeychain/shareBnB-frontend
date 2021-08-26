import { useState } from "react";

export default function Signup({ signUp }) {
    const [formData, setFormData] = useState({});

    function handleChange(evt) {
        const {name, value} = evt.target;

        setFormData(oldData => ({
            ...oldData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        signUp(formData);
    }

    return (
        <div className="Signup container">
            <h1>Signup</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="username"
                        className="form-label">Username</label>
                    <input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <label
                        htmlFor="password"
                        className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <label
                        htmlFor="first_name"
                        className="form-label">First Name</label>
                    <input
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <label
                        htmlFor="last_name"
                        className="form-label">Last Name</label>
                    <input
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <label
                        htmlFor="email"
                        className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <label
                        htmlFor="phone"
                        className="form-label">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <button className="btn btn-primary">Sign up</button>
                </form>
            </div>
        </div>
    )
}