import { FiEdit2, FiTrash2 } from "react-icons/fi";

const UserRow = ({ user, onEdit, onDelete }) => {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="px-4 py-3">{user.id}</td>
      <td className="px-4 py-3">{user.firstName}</td>
      <td className="px-4 py-3">{user.lastName}</td>
      <td className="px-4 py-3">{user.email}</td>
      <td className="px-4 py-3">{user.department}</td>

      <td className="px-4 py-3">
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(user)}
            className="rounded-md bg-blue-500 p-2 text-white transition hover:bg-blue-600"
          >
            <FiEdit2 size={16} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(user)}
            className="rounded-md bg-red-500 p-2 text-white transition hover:bg-red-600"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;