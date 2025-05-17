import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Find your perfect rental car</h1>
      <p>Reliable and budget-friendly rentals for any journey</p>
      <NavLink to="/catalog">View Catalog</NavLink>
    </div>
  );
};

export default HomePage;
