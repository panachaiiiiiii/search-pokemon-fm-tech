import { Pokemon } from "@/app/type/pokemon";
interface Props {
  Pokemon: Pokemon;
}
export const StatsScore = ({ Pokemon }: Props) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="mb-4 text-2xl font-bold">Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-gray-100 p-4">
          <p className="text-gray-500">Max CP</p>
          <h3 className="text-2xl font-bold">{Pokemon.maxCP}</h3>
        </div>
        <div className="rounded-2xl bg-gray-100 p-4">
          <p className="text-gray-500">Max HP</p>

          <h3 className="text-2xl font-bold">{Pokemon.maxHP}</h3>
        </div>
        <div className="rounded-2xl bg-gray-100 p-4">
          <p className="text-gray-500">Height</p>
          <h3 className="text-xl font-bold">
            {Pokemon.height.minimum} - {Pokemon.height.maximum}
          </h3>
        </div>
        <div className="rounded-2xl bg-gray-100 p-4">
          <p className="text-gray-500">Weight</p>

          <h3 className="text-xl font-bold">
            {Pokemon.weight.minimum} - {Pokemon.weight.maximum}
          </h3>
        </div>
      </div>
    </div>
  );
};
