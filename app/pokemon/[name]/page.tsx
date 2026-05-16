"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

import { GET_POKEMON } from "../../graphql/getPokemon";

import type { PokemonData, PokemonVariables } from "../../type/pokemon";

import { typeColors, typeColorsAttacks } from "../../constants/typeColors";
import Link from "next/link";
import Image from "next/image";

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
          <Link
            data-testid="home-btn"
            href={"/"}
          >
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
        {/* Main Card */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl border-4 border-amber-300 bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-extrabold capitalize">
                  {pokemon.name}
                </h1>

                <p className="mt-1 text-gray-500">{pokemon.classification}</p>
              </div>

              <p className="text-xl font-bold text-gray-400">
                #{pokemon.number}
              </p>
            </div>

            {/* Image */}
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="mx-auto h-72 w-72 object-contain "
            />

            {/* Types */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className={`rounded-full px-4 py-2 text-sm font-bold text-white shadow-md ${
                    typeColors[type]
                  }`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-2xl font-bold">Stats</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gray-100 p-4">
                  <p className="text-gray-500">Max CP</p>

                  <h3 className="text-2xl font-bold">{pokemon.maxCP}</h3>
                </div>

                <div className="rounded-2xl bg-gray-100 p-4">
                  <p className="text-gray-500">Max HP</p>

                  <h3 className="text-2xl font-bold">{pokemon.maxHP}</h3>
                </div>

                <div className="rounded-2xl bg-gray-100 p-4">
                  <p className="text-gray-500">Height</p>

                  <h3 className="text-xl font-bold">
                    {pokemon.height.minimum} - {pokemon.height.maximum}
                  </h3>
                </div>

                <div className="rounded-2xl bg-gray-100 p-4">
                  <p className="text-gray-500">Weight</p>

                  <h3 className="text-xl font-bold">
                    {pokemon.weight.minimum} - {pokemon.weight.maximum}
                  </h3>
                </div>
              </div>
            </div>

            {/* Weaknesses */}
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-2xl font-bold">Weaknesses</h2>

              <div className="flex flex-wrap gap-2">
                {pokemon.weaknesses.map((type) => (
                  <span
                    key={type}
                    className={`rounded-full px-4 py-2 text-sm font-bold text-white ${typeColors[type]}`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Resistant */}
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-2xl font-bold">Resistant</h2>

              <div className="flex flex-wrap gap-2">
                {pokemon.resistant.map((type) => (
                  <span
                    key={type}
                    className={`rounded-full px-4 py-2 text-sm font-bold text-white ${typeColors[type]}`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Attacks */}
        <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="mb-6 text-3xl font-bold">Attacks</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Fast */}
            <div>
              <h3 className="mb-3 text-xl font-bold">Fast Attacks</h3>

              <div className="space-y-3">
                {pokemon.attacks.fast.map((attack) => (
                  <div
                    key={attack.name}
                    className={`rounded-2xl bg-gray-100 p-4 ${typeColorsAttacks[attack.type]}`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">{attack.name}</h4>

                      <p className="font-bold">{attack.damage}</p>
                    </div>

                    <p className="text-sm text-gray-500">{attack.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special */}
            <div>
              <h3 className="mb-3 text-xl font-bold">Special Attacks</h3>

              <div className="space-y-3">
                {pokemon.attacks.special.map((attack) => (
                  <div
                    key={attack.name}
                    className={`rounded-2xl bg-gray-100 p-4 ${typeColorsAttacks[attack.type]}`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">{attack.name}</h4>

                      <p className="font-bold">{attack.damage}</p>
                    </div>

                    <p className="text-sm text-gray-500 ">{attack.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Evolutions */}
        {pokemon.evolutions && (
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl ">
            <h2 className="mb-6 text-3xl font-bold">Evolutions</h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {pokemon.evolutions.map((evo) => (
                <Link
                  key={evo.id}
                  data-testid={`pokemon-card-evo${evo.id}`}
                  href={`/pokemon/${evo.name.toLowerCase()}`}
                >
                  <div className="rounded-2xl p-4 text-center border-3 border-amber-200">
                    <img
                      src={evo.image}
                      alt={evo.name}
                      className="mx-auto min-w-10 min-h-10 h-28 w-28"
                    />

                    <h3 className="mt-2 text-lg font-bold capitalize">
                      {evo.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
