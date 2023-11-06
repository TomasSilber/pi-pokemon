import  "./cards.modules.css"
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
    dispatch(getAllPokemons());
  }, []);

  const PokesPerPage = 12;

  const indexOfLastPokes = currentPage * PokesPerPage;
  const indexOfFirstPokes = indexOfLastPokes - PokesPerPage;
  const currentPokes = allPokes ? allPokes.slice(indexOfFirstPokes, indexOfLastPokes) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="card-list">
        <Searchbar></Searchbar>
        <Filterbar></Filterbar>
        <FilterBarType></FilterBarType>
        <Orderbar></Orderbar>
        {allPokes.length>0 ? <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(allPokes.length / PokesPerPage)}
          onPageChange={paginate}
        />: null}
      {currentPokes?.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default Cards;
