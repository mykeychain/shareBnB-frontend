import { useState } from "react"

/** Login
 * 
 *  Login form to handle logging into ShareBnB app
 * 
 *  Props:
 *      - login()
 * 
 *  State:
 *      - formData
 *  
 *  Routes -> Login
 */
export default function Login({ login }) {
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
        login(formData);
    }

    return (
        <div className="Login container">
            <h1 className='mt-2'>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="username"
                        className="form-label mt-2">Username</label>
                    <input
                        id="username"
                        name="username"
                        value={formData.username || ""}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <label
                        htmlFor="password"
                        className="form-label mt-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                    <button className="btn btn-primary mt-2">Login</button>
                </form>
            </div>
        </div>
    )
}