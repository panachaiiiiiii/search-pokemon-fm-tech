import { typeColorsAttacks } from "@/app/constants/typeColors";
import { Pokemon } from "@/app/type/pokemon";
interface Props {
  pokemon: Pokemon;
  head: string;
}
export const AttackskillComponent = ({ pokemon, head }: Props) => {
  const data =
    head === "Fast Attacks" ? pokemon.attacks.fast : pokemon.attacks.special;
  return (
    <div>
      <h3 className="mb-3 text-xl font-bold">{head}</h3>
      <div className="space-y-3">
        {data.map((attack) => (
          <div
            key={attack.name}
            className={`rounded-2xl  p-4 ${typeColorsAttacks[attack.type]}`}
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
  );
};
