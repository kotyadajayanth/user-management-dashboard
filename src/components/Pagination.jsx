import { PAGE_SIZE_OPTIONS } from "../utils/constants";

const Pagination = ({
  currentPage,
  totalPages,
  pageSize,
  setPageSize,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-600">
          Rows per page
        </span>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
        >
          {PAGE_SIZE_OPTIONS.map((size) => (
            <option
              key={size}
              value={size}
            >
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center">
        <p className="font-medium text-slate-700">
          Page {currentPage} of {totalPages}
        </p>

        <p className="text-sm text-slate-500">
          Showing {pageSize} users per page
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="rounded-md bg-slate-700 px-4 py-2 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="rounded-md bg-slate-700 px-4 py-2 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;