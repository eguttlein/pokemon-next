import { Grid } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Layout } from "../components/layouts";

interface Props {
  pokemons: SmallPokemon[];
}

export const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon List">
      <h1>Listado de Pokemon!</h1>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon?limit=850"
  );

  const pokemons: SmallPokemon[] = data.results;

  pokemons.map((pokemon) => {
    const partialId = pokemon.url.substring(
      pokemon.url.indexOf("pokemon/") + 8
    );
    pokemon.id = Number(partialId.substring(0, partialId.indexOf("/")));
    pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
