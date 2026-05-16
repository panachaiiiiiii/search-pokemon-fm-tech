"use client";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { GET_POKEMON } from "../../graphql/getPokemon";
import type { PokemonData, PokemonVariables } from "../../type/pokemon";
import Link from "next/link";
import Image from "next/image";
import { WeakRes } from "../component/PokemonInfo/WeakRes";
import { StatsScore } from "../component/PokemonInfo/StatsScore";
import { CardInfo } from "../component/PokemonInfo/CardInfo";
import { AttackSkill } from "../component/PokemonInfo/AttackSkill";
import { Evolutions } from "../component/PokemonInfo/Evolutions";

export default function Pokemon() {
  const params = useParams();
  const pokemonName = params.name as string;
  const { data, loading, error } = useQuery<PokemonData, PokemonVariables>(
    GET_POKEMON,
    {
      variables: {
        name: pokemonName,
      },
    },
  );
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold text-red-500">
        Error
      </div>
    );
  }
  if (!data?.pokemon) {
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold">
        Pokémon not found
      </div>
    );
  }
  const pokemon = data.pokemon;
  return (
    <div className="min-h-screen  p-6 ">
      <div className="mx-auto max-w-6xl ">
        <div className="mt-4 mb-9">
          <Link data-testid="home-btn" href={"/"}>
            <Image
              className="mx-auto"
              src="/Pokedex_logo.png"
              alt="Pokedex Logo"
              width={300}
              height={120}
              priority
            />
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <CardInfo pokemon={pokemon} />
          <div className="space-y-6">
            <StatsScore Pokemon={pokemon} />
            <WeakRes head="Weaknesses" pokemon={pokemon} />
            <WeakRes head="Resistant" pokemon={pokemon} />
          </div>
        </div>
        <AttackSkill pokemon={pokemon} />
        {pokemon.evolutions && <Evolutions pokemon={pokemon} />}
      </div>
    </div>
  );
}
