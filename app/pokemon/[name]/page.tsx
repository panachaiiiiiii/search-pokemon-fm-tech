"use client";

import { useQuery } from "@apollo/client/react";
import { GET_POKEMON } from "../../graphql/getPokemon";
import { useParams } from "next/navigation";

type PokemonData = {
  pokemon: {
    id: string;
    name: string;
    image: string;
  };
};

export default function Pokemon() {
  const params = useParams();
  const pokemonName = params.name as string;
  const { data, loading, error } = useQuery<PokemonData>(GET_POKEMON, {
    variables: {
      name: pokemonName,
    },
  });

  if (loading) {return <p>Loading...</p>;}

  if (error) {return <p>Error</p>;}

  if (!data?.pokemon) {
    return <p>Pokemon not found</p>;
  }

  return (
    <div>
      <h1>{data.pokemon.name}</h1>

      <img src={data.pokemon.image} alt={data.pokemon.name} />
    </div>
  );
}
