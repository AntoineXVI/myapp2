import axios from "axios";

export const AddToPokedex =  async (pokemon) => {
    const url = 'http://localhost:4444/pokedex/insert';
    axios.post(url, null, { params: {
        name: pokemon.name,
        id: pokemon.id,
    }})
    .then(response => console.log(response.status))
    .catch(err => console.warn(err));
    console.log('Got body_insert:', pokemon);
}


export default AddToPokedex;