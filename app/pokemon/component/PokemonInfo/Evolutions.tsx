import { Pokemon } from "@/app/type/pokemon";
import Link from "next/link";
import Image from "next/image";
interface Props {
  pokemon: Pokemon;
}
export const Evolutions = ({ pokemon }: Props) => {
  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl ">
      <h2 className="mb-6 text-3xl font-bold">Evolutions</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {pokemon.evolutions?.map((evo) => (
          <Link
            key={evo.id}
            data-testid={`pokemon-card-evo${evo.id}`}
            href={`/pokemon/${evo.name.toLowerCase()}`}
          >
            <div className="rounded-2xl p-4 text-center border-3 border-amber-200">
              <Image
                src={evo.image}
                alt={evo.name}
                className="mx-auto min-w-10 min-h-10 h-28 w-28"
              />
              <h3 className="mt-2 text-lg font-bold capitalize">{evo.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
