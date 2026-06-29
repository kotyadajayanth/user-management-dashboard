import UserRow from "./UserRow";

const UserTable = ({
  users,
  onEdit,
  onDelete,
  onSort,
  sortField,
  sortOrder,
}) => {
  const getSortIcon = (field) => {
    if (sortField !== field) {
      return "↕";
    }

    return sortOrder === "asc" ? "↑" : "↓";
  };

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>

            <th
              onClick={() => onSort("firstName")}
              className="cursor-pointer px-4 py-3 text-left select-none"
            >
              First Name {getSortIcon("firstName")}
            </th>

            <th
              onClick={() => onSort("lastName")}
              className="cursor-pointer px-4 py-3 text-left select-none"
            >
              Last Name {getSortIcon("lastName")}
            </th>

            <th
              onClick={() => onSort("email")}
              className="cursor-pointer px-4 py-3 text-left select-none"
            >
              Email {getSortIcon("email")}
            </th>

            <th
              onClick={() => onSort("department")}
              className="cursor-pointer px-4 py-3 text-left select-none"
            >
              Department {getSortIcon("department")}
            </th>

            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;