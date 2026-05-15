import { typeColors } from "@/app/constants/typeColors";
import {  PokemonCardType } from "@/app/type/pokemon";

interface Props {
  pokemon: PokemonCardType;
} 
export const PokemonCard  = ({pokemon}:Props) => {
  return (
    <div
      key={pokemon.id}
      className="overflow-hidden rounded-3xl p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white border-4 border-amber-300"
    >
      {/* Pokemon Number */}
      <p className="text-sm font-semibold text-black">#{pokemon.number}</p>

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
};
