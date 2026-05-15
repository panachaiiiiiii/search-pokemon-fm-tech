import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      image

      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_20 = gql`
  query GetPokemon($first: Int!) {
    pokemon(first: $first) {
      id
      number
      name
      image

      weight {
        minimum
        maximum
      }

      height {
        minimum
        maximum
      }

      classification

      types

      resistant

      weaknesses

      fleeRate

      maxCP

      maxHP

      attacks {
        fast {
          name
          type
          damage
        }

        special {
          name
          type
          damage
        }
      }

      evolutions {
        id
        name
        image
      }
    }
  }
`;