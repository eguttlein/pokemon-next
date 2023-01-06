import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={onPokemonClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            alt="Pokemon Image"
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text color="white" transform="capitalize">
              {pokemon.name}
            </Text>
            <Text color="white">#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
