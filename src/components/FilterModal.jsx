import { useEffect, useState } from "react";
import { DEPARTMENTS } from "../utils/constants";

const initialFilters = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
};

const FilterModal = ({
  isOpen,
  filters,
  onApply,
  onClose,
}) => {
  const [formData, setFormData] = useState(initialFilters);

  useEffect(() => {
    if (isOpen) {
      setFormData(filters);
    }
  }, [isOpen, filters]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    setFormData(initialFilters);
    onApply(initialFilters);
    onClose();
  };

  const handleApply = () => {
    onApply(formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold">
          Filter Users
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-md border p-3"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-md border p-3"
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border p-3"
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full rounded-md border p-3"
          >
            <option value="">All Departments</option>

            {DEPARTMENTS.map((department) => (
              <option
                key={department}
                value={department}
              >
                {department}
              </option>
            ))}
          </select>

        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={handleReset}
            className="rounded-md border px-4 py-2"
          >
            Reset
          </button>

          <button
            onClick={handleApply}
            className="rounded-md bg-blue-600 px-4 py-2 text-white"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;