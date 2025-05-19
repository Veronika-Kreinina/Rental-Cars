import React from "react";
import { useSelector } from "react-redux";
import { selectCar } from "../../redux/selectors";

const CarDetailPage = () => {
  const cars = useSelector(selectCar);
  return (
    <>
      <div>
        <div>
          <p>
            {cars.brand} {cars.model}, {cars.year}
          </p>

          <p>Id: {cars.id}</p>
        </div>

        <div>
          <div>
            <use href={`${cars.icons}`}></use>

            <p>{cars.address}</p>
          </div>
          <div>
            <p>Mileage: {cars.mileage} km</p>
          </div>
        </div>

        <p>${cars.rentalPrice}</p>
        <p>{cars.description}</p>
      </div>

      <div>
        <div>
          <h3>Rental Conditions: </h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div>
          <h3>Car Specifications:</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div>
          <h3>Accessories and functionalities:</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarDetailPage;
