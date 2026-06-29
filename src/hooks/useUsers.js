import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userApi";
import { formatUser } from "../utils/helpers";
import { toast } from "react-toastify";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();

      setUsers(data.map(formatUser));
    } catch {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await createUser(user);

      const newUser = {
        ...user,
        id: response.id || Date.now(),
      };

      setUsers((prevUsers) => [newUser, ...prevUsers]);
      toast.success("User added successfully.");
    } catch {
      setError("Unable to add user.");
    }
  };

  const editUser = async (user) => {
    try {
      await updateUser(user.id, user);

      setUsers((prevUsers) =>
        prevUsers.map((item) =>
          item.id === user.id ? user : item
        )
      );
      toast.success("User updated successfully.");
    } catch {
      setError("Unable to update user.");
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );
      toast.success("User deleted successfully.");
    } catch {
      setError("Unable to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    addUser,
    editUser,
    removeUser,
  };
};

export default useUsers;