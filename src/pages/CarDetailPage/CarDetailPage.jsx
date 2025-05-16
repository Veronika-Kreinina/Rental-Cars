import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CarDetailPage() {
  const { carId } = useParams();
  const car = useSelector((state) =>
    state.cars.list.find((c) => c.id === carId)
  );

  if (!car) return <div>Завантаження...</div>;

  return (
    <div>
      <h2>{car.name}</h2>
      <p>Ціна: {car.pricePerDay}₴/день</p>
      <form>
        <label>
          Дата оренди:
          <input type="date" name="startDate" required />
        </label>
        <label>
          Кількість днів:
          <input type="number" name="days" min="1" required />
        </label>
        <button type="submit">Забронювати</button>
      </form>
    </div>
  );
}
