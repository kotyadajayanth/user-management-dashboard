import { FiFilter, FiPlus } from "react-icons/fi";
import SearchBar from "./SearchBar";

const Toolbar = ({
  search,
  setSearch,
  onFilter,
  onAddUser,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row md:items-center md:justify-between">
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onFilter}
          className="flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
        >
          <FiFilter />
          Filter
        </button>

        <button
          type="button"
          onClick={onAddUser}
          className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <FiPlus />
          Add User
        </button>
      </div>
    </div>
  );
};

export default Toolbar;