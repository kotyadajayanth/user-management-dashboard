const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            User Management Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
  View, search, filter and manage users easily.
</p>
        </div>
      </div>
    </header>
  );
};

export default Header;