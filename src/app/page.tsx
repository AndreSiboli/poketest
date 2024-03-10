import { Suspense } from "react";
import styles from "./page.module.scss";

import axios from "axios";

import { PokemonType } from "@/@types/Pokemons";
import PokemonContainer from "./components/layout/PokemonContainer";
import Container from "./components/layout/Container";

async function getPokemons() {
  const endpoints: string[] = [];

  for (let i = 1; i < 61; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  }

  const response = await axios
    .all(endpoints.map((url) => axios.get(url)))
    .then((res) => res);

  const res = response.map((pokemon) => pokemon.data);

  return res as unknown as PokemonType[];
}

export default async function Home() {
  const data = await getPokemons();

  return (
    <main className={styles.main}>
      <Suspense fallback="Loading...">
        <Container>
          <PokemonContainer data={data} />
        </Container>
      </Suspense>
    </main>
  );
}
