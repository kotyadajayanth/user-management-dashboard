const EmptyState = () => {
  return (
    <div className="py-16 text-center">
      <h2 className="text-xl font-semibold text-slate-700">
        No users found
      </h2>

      <p className="mt-2 text-slate-500">
        Try changing your search or filter.
      </p>
    </div>
  );
};

export default EmptyState;