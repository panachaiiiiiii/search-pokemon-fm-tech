import { typeColors } from "@/app/constants/typeColors";
import { Pokemon } from "../../../type/pokemon";
import Image from "next/image";
interface Props {
  pokemon: Pokemon;
}
export const CardInfo = ({ pokemon }: Props) => {
  return (
    <div className="rounded-3xl border-4 border-amber-300 bg-white p-6 shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-extrabold capitalize">{pokemon.name}</h1>

          <p className="mt-1 text-gray-500">{pokemon.classification}</p>
        </div>

        <p className="text-xl font-bold text-gray-400">#{pokemon.number}</p>
      </div>

      <Image
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
  );
};
