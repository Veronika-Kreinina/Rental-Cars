import React from "react";
import { useSelector } from "react-redux";
import { selectCar } from "../redux/selectors";

const CarList = () => {
  const cars = useSelector(selectCar);

  return (
    <div>
      <ul>
        {cars.map(() => (
          <li key={cars.id}>
            <img src={cars.img} alt={`${cars.brand} ${cars.model}`} />
            <h3>{`${cars.brand} <span>${cars.model}</span>, ${cars.year}`}</h3>
            <h3>${`${cars.rentalPrice}`}</h3>
            <p>{cars.address}</p>
            <p>{cars.rentalCompany}</p>

            <p>{cars.type}</p>
            <p>{cars.mileage}km</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
