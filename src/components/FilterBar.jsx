import { useState } from "react";

const FilterBar = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [range, setRange] = useState({ from: "", to: "" });

  const handleRange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(options);
  };

  return (
    <div>
      <div>
        <label htmlFor="brand">Car brand</label>
        <select
          id="brand"
          multiple
          value={selectedOptions}
          onChange={handleChange}
        >
          <option value="aston-martin">Aston Martin</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="bentley">Bentley</option>
          <option value="buick">Buick</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="chrysler">Chrysler</option>
          <option value="gmc">GMC</option>
          <option value="hummer">HUMMER</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Price / 1 hour</label>
        <select
          id="price"
          multiple
          value={selectedOptions}
          onChange={handleChange}
        >
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
        </select>
      </div>
      <div>
        <label>Сar mileage / km</label>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            name="from"
            value={range.from}
            onChange={handleRange}
            placeholder="From"
            className="border p-2 rounded w-24"
          />
          <span>|</span>
          <input
            type="number"
            name="to"
            value={range.to}
            onChange={handleRange}
            placeholder="To"
            className="border p-2 rounded w-24"
          />
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default FilterBar;
