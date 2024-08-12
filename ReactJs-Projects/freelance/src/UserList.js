import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaTrash } from "react-icons/fa";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // const [editUserId, setEditUserId] = useState(null);
    // const [userToEdit, setUserToEdit] = useState(null);
    // const [editUser, setEditUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await axios.get(
            "http://localhost:8080/users/usersList"
            );
            // console.log("API response:", response.data);

            if (Array.isArray(response.data)) {
            setUsers(response.data);
            } else if (Array.isArray(response.data.data)) {
            setUsers(response.data.data);
            } else {
            console.error("Unexpected data format:", response.data);
            setUsers([]);
            }
        } catch (err) {
            setError("Failed to fetch users");
        } finally {
            setLoading(false);
        }
        };

        fetchUsers();
    }, []);
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleString(); // Format as per your preference
        };

    const handleEdit =(userId) => {
            navigate(`/editUser/${userId}`)
    };

    // to delete the users from the list.
    const handleDelete = async(userId) =>{
        try {
            await axios.delete(`http://localhost:8080/users/usersList/${userId}`);
            const usersList = users.filter( user => user._id !== userId);
            setUsers(usersList)
        } catch (err) {
            console.error("Failed to delete user", err);
        }
    };

    // const handleUpdate = async (updatedUser) => {
    //     try {
    //     await axios.put(`http://localhost:5000/api/users/${updatedUser._id}`, updatedUser);
    //     setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
    //     setEditUser(null);
    //     } catch (err) {
    //     console.error('Failed to update user', err);
    //     }
    // };
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // const handleCancelEdit = () => {
    //     setEditUser(null);
    // };

    return (
        <div className="users-list">
            <h1>Users List</h1>
            {users.length === 0 ? (
            <p>No users available</p>
            ) : (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Username</th>
                    <th>Date Created</th>
                    {/* <th>Date Modified</th> */}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.userName}</td>
                    <td>{formatDate(user.createdAt)}</td>
                    <td>
                        <button onClick={() => handleEdit(user._id)} className="button-edit">
                            <FaUserEdit />
                        </button>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(user._id)} className="button-delete"><FaTrash /></button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        );
};

export default UsersList;
