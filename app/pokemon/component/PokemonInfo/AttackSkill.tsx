
import { Pokemon } from "@/app/type/pokemon";
import { AttackskillComponent } from "./Attackskill.component/Attackskill.component";
interface Props {
  pokemon: Pokemon;
}
export const AttackSkill = ({ pokemon }: Props) => {
  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-3xl font-bold">Attacks</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <AttackskillComponent head="Fast Attacks" pokemon={pokemon} />
        <AttackskillComponent head="Special Attacks" pokemon={pokemon} />
      </div>
    </div>
  );
};
