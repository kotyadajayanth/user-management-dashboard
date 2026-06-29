const DashboardCards = ({ totalUsers, totalDepartments }) => {
  const cards = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: "👥",
    },
    {
      title: "Departments",
      value: totalDepartments,
      icon: "🏢",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                {card.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                {card.value}
              </h2>
            </div>

            <span className="text-4xl">
              {card.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;