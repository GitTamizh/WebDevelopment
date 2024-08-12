    import React, { useEffect, useState } from "react";
    import axios from "axios";
    import { useParams, useNavigate } from "react-router-dom";

    const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await axios.get(
                `$http://localhost:8080/users/usersList/${id}`
            );
            const userData = response.data;
            setUser(userData);
            setName(userData.name);
            setEmail(userData.email);
            setMobile(userData.mobile);
            setUserName(userData.userName);
        } catch (err) {
            setError("Failed to fetch user");
        }
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await axios.put(
            `http://localhost:8080/users/usersList/${id}`,
            {
                name,
                email,
                mobile,
                userName,
            }
        );
        setSuccess(response.data.message);
            navigate("/users-list");
        } catch (err) {
        setError("Failed to update user");
        }
    };

    return (
        <div>
        <h1>Edit User</h1>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        {user && (
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="mobile">Mobile</label>
                <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="userName">Username</label>
                <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                />
            </div>
            <button type="submit">Update</button>
            </form>
        )}
        </div>
    );
    };

    export default EditUser;
