import { useEffect, useState } from "react";
import { DEPARTMENTS } from "../utils/constants";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
};

const UserForm = ({
  isOpen,
  title,
  selectedUser,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    } else {
      setFormData(initialState);
    }

    setErrors({});
  }, [selectedUser, isOpen]);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit(formData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6">
        <h2 className="mb-6 text-2xl font-semibold">
          {title}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded border p-3"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName}
            </p>
          </div>

          <div>
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded border p-3"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName}
            </p>
          </div>

          <div>
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border p-3"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          </div>

          <div>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full rounded border p-3"
            >
              <option value="">Select Department</option>

              {DEPARTMENTS.map((department) => (
                <option
                  key={department}
                  value={department}
                >
                  {department}
                </option>
              ))}
            </select>

            <p className="mt-1 text-sm text-red-500">
              {errors.department}
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-slate-300 px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-blue-600 px-5 py-2 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;