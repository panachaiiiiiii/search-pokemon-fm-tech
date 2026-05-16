"use client";

import { Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";

import { GET_POKEMON_ALL } from "./graphql/getPokemon";
import { PokemonCardData } from "./type/pokemon";
import { PokemonCard } from "./pokemon/component/card/PokemonCard ";
import { Suspense } from "react";

const { Title } = Typography;
const { Search } = Input;

export default function HomePage() {
  const router = useRouter();

  const handleSearch = (value: string) => {
    if (!value) return;
    router.push(`/pokemon/${value.toLowerCase()}`);
  };

  const { data, error } = useQuery<PokemonCardData>(GET_POKEMON_ALL);



  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold text-red-500">
        Error loading Pokémon
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800  ">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <Title className="!mb-2 !text-5xl !font-extrabold !bg-gradient-to-br from-yellow-400 from-24% to-blue-500 !bg-clip-text  !text-transparent">
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
        <Suspense>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data?.pokemons.map((pokemon) => {
              return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
            })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
