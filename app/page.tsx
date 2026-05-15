"use client";

import { Input, Pagination, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";

import { GET_POKEMON_ALL } from "./graphql/getPokemon";
import { PokemonCardData } from "./type/pokemon";

const { Title } = Typography;
const { Search } = Input;

export default function HomePage() {
  const router = useRouter();

  const handleSearch = (value: string) => {
    if (!value) return;

    router.push(`/pokemon/${value.toLowerCase()}`);
  };

  const { data, loading, error } = useQuery<PokemonCardData>(GET_POKEMON_ALL);

  const typeColors: Record<string, string> = {
    Fire: "bg-red-400 ",
    Water: "bg-blue-400",
    Grass: "bg-green-400",
    Electric: "bg-yellow-300",
    Poison: "bg-purple-500",
    Flying: "bg-sky-300",
    Ground: "bg-amber-600",
    Rock: "bg-stone-500",
    Fighting: "bg-red-700",
    Psychic: "bg-pink-500",
    Bug: "bg-lime-500",
    Dragon: "bg-indigo-600",
    Fairy: "bg-pink-300",
    Ice: "bg-cyan-300",
    Ghost: "bg-violet-700",
    Dark: "bg-gray-700",
    Steel: "bg-slate-400",
    Normal: "bg-zinc-400",
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold text-red-500">
        Error loading Pokémon
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-100  ">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <Title className="!mb-2 !text-5xl !font-extrabold">
            Pokémon Explorer
          </Title>

          <p className="text-lg text-gray-500">Search your favorite Pokémon</p>
        </div>

        {/* Search */}
        <div className="mb-10 flex justify-center">
          <Search
            placeholder="Search Pokémon..."
            enterButton
            size="large"
            onSearch={handleSearch}
            className="max-w-2xl"
            data-testid="search"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data?.pokemons.map((pokemon) => {
            return (
              <div
                key={pokemon.id}
                className="overflow-hidden rounded-3xl p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white border-4 border-amber-300"
              >
                {/* Pokemon Number */}
                <p className="text-sm font-semibold text-black">
                  #{pokemon.number}
                </p>

                {/* Image */}
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="mx-auto h-36 w-36 object-contain "
                />

                {/* Name */}
                <h1 className="mt-3 text-center text-2xl font-extrabold text-black capitalize">
                  {pokemon.name}
                </h1>

                {/* Classification */}
                <p className="mt-1 text-center text-sm text-black">
                  {pokemon.classification}
                </p>

                {/* Types */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {pokemon.types.map((type) => (
                    <span
                      key={type}
                      className={`rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-md ${typeColors[type]}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
}
