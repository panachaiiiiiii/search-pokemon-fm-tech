import Pokemon from "../pokemon/[name]/page";

export type Attack = {
  name: string;
  type: string;
  damage: number;
};

export type Attacks = {
  fast: Attack[];
  special: Attack[];
};

export type Evolution = {
  id: string;
  name: string;
  image: string;
};

export type Pokemon = {
  id: string;
  number: string;

  name: string;
  image: string;

  weight: {
    minimum: string;
    maximum: string;
  };

  height: {
    minimum: string;
    maximum: string;
  };

  classification: string;

  types: string[];

  resistant: string[];

  weaknesses: string[];

  fleeRate: number;

  maxCP: number;

  maxHP: number;

  attacks: Attacks;

  evolutions?: Evolution[];
};

export type PokemonData = {
  pokemon: Pokemon | null;
};

export type PokemonVariables = {
  name: string;
};

export type PokemonCardType = {
  id: string;
  number: string;

  name: string;
  image: string;
  classification: string;
  types: string[];
};
export type PokemonCardData = {
pokemons: PokemonCardType[];
};
