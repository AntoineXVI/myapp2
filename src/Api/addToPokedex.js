import axios from "axios";

export function AddToPokedex (pokemon,_id) {
    // Send a POST request
    axios({
        method: 'post',
        url: 'http://localhost:4444/pokedex/insert',
        data: {
        "name":pokemon,
        "id":pokemon.id
        }
    });
}