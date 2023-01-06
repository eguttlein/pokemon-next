import {useEffect, useState} from 'react';
import { Grid, Card, Image } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import NoPokemon from "../../components/ui/NoPokemon";
import { pokemonList } from "../../utils";
import { useRouter } from 'next/router';

export const FavoritesPage = () => {
  const [favsList, setFavsList] = useState<number[]>([])

  useEffect(() => {
    setFavsList(pokemonList())
  }, [])

  const router = useRouter();

  const onPokemonClick = (favPokemon: number) => {
    router.push(`/pokemon/${favPokemon}`);
  };
  

  return (
    <Layout title="Pokemon Favoritos">
      <Grid.Container css={{ margin: "5px" }} gap={2}>
        {favsList.length > 0 ? (
          <Grid xs={12} sm={4} >
            {favsList.map((favPokemon) => (
              <Card isPressable  key={favPokemon} onClick={()=> (onPokemonClick(favPokemon))}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${favPokemon}.png`}
                  alt="FavPokemon"
                />
              </Card>
            ))}
          </Grid>
        ) : (
          <NoPokemon />
        )}
      </Grid.Container>
    </Layout>
  );
};

export default FavoritesPage;
