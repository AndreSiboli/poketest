"use client";

import { useState } from "react";
import { PokemonType } from "@/@types/Pokemons";
import axios from "axios";

import styles from "@/styles/layout/PokemonContainer.module.scss";
import Link from "next/link";
import Button from "../buttons/Button";
import Img from "../utils/Img";

interface PropsType {
  data: PokemonType[] | null;
}

export default function PokemonContainer(props: PropsType) {
  const { data } = props;
  const [pokemons, setPokemons] = useState(data);

  function capitalizeString(str: string) {
    return str ? `${str[0].toUpperCase()}${str.substring(1)}` : "";
  }

  async function getMorePokemons() {
    const endpoints: string[] = [];

    const index = !pokemons ? 1 : pokemons.length + 1;
    const to = !pokemons ? 61 : pokemons.length + 61;

    for (let i = index; i < to; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    const response = await axios
      .all(endpoints.map((url) => axios.get(url)))
      .then((res) => res);

    const res = response.map(
      (pokemon) => pokemon.data
    ) as unknown as PokemonType[];

    setPokemons((prevState) => {
      if (!prevState) return [...res];
      return [...prevState, ...res];
    });
  }

  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemons}>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Link
              href={`/pokemon/${pokemon.name}`}
              className={styles.pokemons_card}
              key={pokemon.id}
            >
              <div className={styles.pokemons_card_container}>
                <div className={styles.card_image}>
                  <Img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className={styles.card_name}>
                  <span>{capitalizeString(pokemon.name)}</span>
                </div>
                <div className={styles.card_type}>
                  <p className={`${styles[pokemon.types[0].type.name]}`}>
                    {capitalizeString(pokemon.types[0].type.name)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className={styles.button_container}>
        <Button text="Mais" handleButton={getMorePokemons} classes="styled" />
      </div>
    </div>
  );
}
