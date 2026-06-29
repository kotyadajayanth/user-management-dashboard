import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="relative w-full md:w-96">
      <FiSearch className="absolute left-3 top-3 text-slate-400" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name, email or department..."
        className="w-full rounded-md border border-slate-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;