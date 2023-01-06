import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { PokemonInfo } from "../../interfaces";
import {
  Card,
  Row,
  Text,
  Grid,
  Container,
  Image,
  Button,
} from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { existInFavorites, toggleFavorites } from "../../utils/toggleFavorites";

interface Props {
  pokemon: PokemonInfo;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [existFavorites, setExistFavorites] = useState(
    existInFavorites(pokemon.id)
  );

  const onToggleFavorites = () => {
    toggleFavorites(pokemon.id);
    setExistFavorites(!existFavorites);
  };

  return (
    <Layout title={`#${pokemon.id} - ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 color="white" transform="capitalize">
                #{pokemon.id} - {pokemon.name}
              </Text>

              <Button
                onClick={onToggleFavorites}
                color="gradient"
                bordered={!existFavorites}
              >
                {existFavorites ? "Quitar de Favoritos" : "Agregar a Favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container css={{ display: "flex" }}>
                <Text>Male:</Text>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} />
                <Text>Female:</Text>
                <Image src={pokemon.sprites.front_female} alt={pokemon.name} />
                <Image src={pokemon.sprites.back_female} alt={pokemon.name} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonList = [...Array(850)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemonList.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: pokemonId } = params as { id: string };

  const { data } = await pokeApi.get<PokemonInfo>(`/pokemon/${pokemonId}`);

  const { id, name, sprites } = data;

  return {
    props: {
      pokemon: { id, name, sprites },
    },
  };
};

export default PokemonPage;
