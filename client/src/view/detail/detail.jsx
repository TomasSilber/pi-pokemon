import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokeDetail, CleanDetail } from "../../redux/actions/actions";
import { useEffect } from "react";

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()
  const pokeDetail = useSelector(state => state.pokeDetail)

  useEffect(()=>{
    dispatch(getPokeDetail(params?.id))

    return () => dispatch(CleanDetail())
  }, [params?.id])
  console.log(pokeDetail.types);

  
  return (
    <div>
      <h2>{pokeDetail?.name} </h2>
      <p>Id: {pokeDetail?.id} </p>
      <p>Health: {pokeDetail?.hp} </p>
      <p>Attack: {pokeDetail?.attack} </p>
      <p>Defense: {pokeDetail?.defense} </p>
      <p>Type: {pokeDetail?.type} </p>
      <img src={pokeDetail?.image} alt={pokeDetail?.name} />

    </div>
  );
}

export default Detail;
