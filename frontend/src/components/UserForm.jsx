import { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users", formData);
            alert(response.data.message);
            setFormData({ name: "", email: "", age: "" });
        } catch (error) {
            console.error(error);
            alert("Error submitting data");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
            <h1>User Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
