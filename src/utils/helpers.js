export const formatUser = (user) => {
  const names = user.name.split(" ");

  return {
    id: user.id,
    firstName: names[0] || "",
    lastName: names.slice(1).join(" "),
    email: user.email,
    department: user.company?.name || "Engineering",
  };
};