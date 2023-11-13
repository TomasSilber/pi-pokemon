import "./cards.modules.css"
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";
import { useEffect } from "react";
import Card from "../card/card";
import Pagination from "../paginado/pagination";
import Searchbar from "../searchbar/Searchbar";
import Orderbar from "../order/order";
import Filterbar from "../filter/filter";
import FilterBarType from "../filter/filter.type";


const Cards = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const allPokes = useSelector((state) => state.allPokes);

  useEffect(() => {
    dispatch(getAllPokemons())
  }, []);

  useEffect(() => {
    setCurrentPage(1)
  }, [allPokes]);

  const PokesPerPage = 12;

  const indexOfLastPokes = currentPage * PokesPerPage;
  const indexOfFirstPokes = indexOfLastPokes - PokesPerPage;
  const currentPokes = allPokes ? allPokes.slice(indexOfFirstPokes, indexOfLastPokes) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="header">
        <Searchbar></Searchbar>
      </div>

      <header className="header-filter">
        <p>Origin: </p>
        <Filterbar></Filterbar>
        <p>Type: </p>
        <FilterBarType></FilterBarType>
        <p>Order: </p>
        <Orderbar></Orderbar>
      </header>

      <div className="pagination">
        {allPokes.length > 0 ? <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(allPokes.length / PokesPerPage)}
          onPageChange={paginate}
        /> : null}
      </div>

      <div className="cartas">
        <main className="card-list">
          {currentPokes?.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />))}
        </main>
      </div>
    </div>
  );
};

export default Cards;
