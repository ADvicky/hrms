// export type Role = "admin" | "employee";

export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    // allowedRoles: ["admin", "employee"],
  },
  {
    name: "TaskAssign",
    href: "/dashboard",
    // allowedRoles: ["admin"],
  },
  {
    name: "Register",
    href: "/dashboard",
    // allowedRoles: ["admin"],
  },
  {
    name: "Settings",
    href: "/dashboard",
    // allowedRoles: ["admin", "employee"],
  },
];

export function hasPermission(
  role: string | undefined,
  allowedRoles: string[]
): boolean {
  if (!role) return false;

  return allowedRoles.includes(role);
}