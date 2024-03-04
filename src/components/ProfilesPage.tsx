import { NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="d-grid gap-2">
      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`/profiles/${profile}`}
          className={({ isActive }) => {
            return isActive ? "link-danger" : "link-primary";
          }}
        >
          Profile {profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}
