import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, toggleFavorite } from "../../redux/slices/carSlise.js";
import { Link } from "react-router-dom";
import { selectCar, selectFilters } from "../../redux/selectors.js";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCar);
  const [filters, setFilters] = useState(selectFilters);

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [dispatch, filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Каталог авто</h2>
      <div>
        <input name="brand" placeholder="Бренд" onChange={handleChange} />
        <input
          name="maxPrice"
          type="number"
          placeholder="Макс. ціна (₴)"
          onChange={handleChange}
        />
        <input
          name="maxMileage"
          type="number"
          placeholder="Макс. пробіг (км)"
          onChange={handleChange}
        />
      </div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Link to={`/catalog/${car.id}`}>
              {car.name} - {car.pricePerDay}₴/день
            </Link>
            <button onClick={() => dispatch(toggleFavorite(car))}>
              {car.isFavorite ? "★" : "☆"} Обране
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
