import { typeColors } from "@/app/constants/typeColors";
import { Pokemon } from "@/app/type/pokemon";
interface Props {
  pokemon: Pokemon;
  head: string;
}
export const WeakRes = ({ pokemon, head }: Props) => {
  const data = head === "Weaknesses" ? pokemon.weaknesses : pokemon.resistant;
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="mb-4 text-2xl font-bold">{head}</h2>

      <div className="flex flex-wrap gap-2">
        {data.map((type) => (
          <span
            key={type}
            className={`rounded-full px-4 py-2 text-sm font-bold text-white ${
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
