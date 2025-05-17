import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
