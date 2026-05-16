"use client";

import Link from "next/link";

import { typeColors } from "@/app/constants/typeColors";
import { PokemonCardType } from "@/app/type/pokemon";

interface Props {
  pokemon: PokemonCardType;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Link href={`/pokemon/${pokemon.name.toLowerCase()}`}>
      <div
        className={`overflow-hidden rounded-3xl border-4  border-amber-300  p-3 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white `}
      >
        <div className="flex justify-between">
          {/* Name */}
          <h1 className=" text-xl font-extrabold capitalize text-black">
            {pokemon.name}
          </h1>
          {/* Pokemon Number */}
          <p className="text-sm font-semibold text-black">#{pokemon.number}</p>
        </div>

        {/* Classification */}
        <p className=" text-sm text-black">{pokemon.classification}</p>

        {/* Image */}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-36 w-36 object-contain"
        />

        {/* Types */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`shadow-md transition  rounded-full px-3 py-1 text-sm font-medium text-white ${typeColors[type]}`}
            >
              {type}
            </span>
          ))}
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </Link>
  );
};
