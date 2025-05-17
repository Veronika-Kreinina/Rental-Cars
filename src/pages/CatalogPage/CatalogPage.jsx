import FilterBar from "../../components/FilterBar";
import CarList from "../../components/CarList";

const CatalogPage = () => {
  return (
    <div>
      <h1>Catalog of Cars</h1>
      <FilterBar />
      <CarList />
    </div>
  );
};

export default CatalogPage;
