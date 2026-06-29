import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";
import Toolbar from "./components/Toolbar";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
import FilterModal from "./components/FilterModal";
import UserForm from "./components/UserForm";
import useUsers from "./hooks/useUsers";
import ConfirmDialog from "./components/ConfirmDialog";
import DashboardCards from "./components/DashboardCards";
import PageTitle from "./components/PageTitle";


function App() {
  const {
    users,
    loading,
    error,
    addUser,
    editUser,
    removeUser,
  } = useUsers();

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
  firstName: "",
  lastName: "",
  email: "",
  department: "",
});

  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const totalDepartments = new Set(
  users.map((user) => user.department)
).size;
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
const [userToDelete, setUserToDelete] = useState(null);

  const filteredUsers = useMemo(() => {
  const keyword = search.trim().toLowerCase();

  return users.filter((user) => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(keyword) ||
      user.lastName.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      user.department.toLowerCase().includes(keyword);

    const matchesFilter =
      user.firstName
        .toLowerCase()
        .includes(filters.firstName.toLowerCase()) &&
      user.lastName
        .toLowerCase()
        .includes(filters.lastName.toLowerCase()) &&
      user.email
        .toLowerCase()
        .includes(filters.email.toLowerCase()) &&
      (filters.department === "" ||
        user.department === filters.department);

    return matchesSearch && matchesFilter;
  });
}, [users, search, filters]);
  const sortedUsers = useMemo(() => {
    const list = [...filteredUsers];

    list.sort((a, b) => {
      const valueA = String(a[sortField]).toLowerCase();
      const valueB = String(b[sortField]).toLowerCase();

      if (sortOrder === "asc") {
        return valueA.localeCompare(valueB);
      }

      return valueB.localeCompare(valueA);
    });

    return list;
  }, [filteredUsers, sortField, sortOrder]);

  const totalPages = Math.max(
  1,
  Math.ceil(sortedUsers.length / pageSize)
);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    return sortedUsers.slice(start, start + pageSize);
  }, [sortedUsers, currentPage, pageSize]);
  useEffect(() => {
  setCurrentPage(1);
}, [search, filters]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortField(field);
    setSortOrder("asc");
  };

  const handleAddClick = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (user) => {
  setUserToDelete(user);
  setIsDeleteOpen(true);
};
const confirmDelete = async () => {
  if (!userToDelete) {
    return;
  }

  await removeUser(userToDelete.id);

  setCurrentPage(1);
  setUserToDelete(null);
  setIsDeleteOpen(false);
};

  const handleSubmit = async (user) => {
    if (selectedUser) {
      await editUser(user);
    } else {
      await addUser(user);
    }

    setCurrentPage(1);
    setIsFormOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {loading && <Loader />}

        {!loading && error && (
          <div className="rounded-lg bg-red-100 p-4 text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-6">
            <PageTitle />
            <DashboardCards
  totalUsers={filteredUsers.length}
  totalDepartments={totalDepartments}
/>
            <Toolbar
              search={search}
              setSearch={setSearch}
              onFilter={() => setIsFilterOpen(true)}
              onAddUser={handleAddClick}
            />

            {paginatedUsers.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                <UserTable
                  users={paginatedUsers}
                  onEdit={handleEditClick}
                  onDelete={handleDeleteClick}
                  onSort={handleSort}
                  sortField={sortField}
                  sortOrder={sortOrder}
                />

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={pageSize}
                  setPageSize={(size) => {
                    setPageSize(size);
                    setCurrentPage(1);
                  }}
                  onPrevious={() =>
                    setCurrentPage((prev) =>
                      Math.max(prev - 1, 1)
                    )
                  }
                  onNext={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, totalPages)
                    )
                  }
                />
              </>
            )}
          </div>
        )}

        <UserForm
          isOpen={isFormOpen}
          title={selectedUser ? "Edit User" : "Add User"}
          selectedUser={selectedUser}
          onClose={() => {
  setSelectedUser(null);
  setIsFormOpen(false);
}}
          onSubmit={handleSubmit}
        />

        <FilterModal
  isOpen={isFilterOpen}
  filters={filters}
  onApply={setFilters}
  onClose={() => setIsFilterOpen(false)}
/>
        <ConfirmDialog
  isOpen={isDeleteOpen}
  title="Delete User"
  message={`Are you sure you want to delete ${userToDelete?.firstName}?`}
  onCancel={() => {
    setUserToDelete(null);
    setIsDeleteOpen(false);
  }}
  onConfirm={confirmDelete}
/>
      </main>
    </div>
  );
}

export default App;