import { useEffect, useState } from "react";
import { GetAll } from "../Api/pokedex";

function ManagePokemon(props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = GetAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list">
        <div className="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <><h1>ManagePokemon</h1>;<div key={key} className="bloc-pokemon">
                <img className="avatar" src={pokemon.img} />
                <h2>{pokemon.name}</h2>
                {/*<button onClick={()=>ModifyToPokedex(pokemon._id)}>Modifier !</button>*/}
            </div>
            </>
            })
        }
        </div>
    </div>;
}

export default ManagePokemon;