"use client";

import {
  PokemonAbilitiesType,
  PokemonCharacteristicType,
  PokemonType,
} from "@/@types/Pokemons";

import Container from "@/app/components/layout/Container";
import ContainerPokemon from "@/app/components/pages/pokemon/ContainerPokemon";
import MainInfos from "@/app/components/pages/pokemon/MainInfos";
import Ability from "@/app/components/pages/pokemon/Ability";
import styles from "@/app/pokemon/[name]/page.module.scss";
import axios from "axios";
import Image from "next/image";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Img from "@/app/components/utils/Img";

export default function Pokemon() {
  const params = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [characteristic, setCharacteristic] =
    useState<PokemonCharacteristicType | null>(null);
  const [abilities, setAbilities] = useState<PokemonAbilitiesType[] | null>(
    null
  );

  useEffect(() => {
    async function getPokemon() {
      const { name } = params;
      const response = (await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((res) => res.data)
        .catch((err) => console.log("err"))) as unknown as PokemonType;

      const characteristic = await axios
        .get(`https://pokeapi.co/api/v2/characteristic/${response.id}/`)
        .then((res) => res.data)
        .catch((err) => console.log("err"));

      await getAbilities(response.abilities);

      response ? setPokemon(response) : null;
      characteristic ? setCharacteristic(characteristic) : null;
    }

    getPokemon();
  }, []);

  function findEnglish() {
    if (!characteristic) return "This pokémon has not a characteristic.";

    const language = characteristic.descriptions.filter(
      (desc) => desc.language.name === "en"
    );

    if (language.length === 1) return language[0].description;
  }

  async function getAbilities(abilities: PokemonType["abilities"]) {
    const endpoints = abilities.map((ability) => ability.ability.url);

    const response = await axios
      .all(endpoints.map((url) => axios.get(url)))
      .then((res) => res);

    const res = response.map(
      (pokemon) => pokemon.data
    ) as PokemonAbilitiesType[];

    setAbilities(res);
  }

  return (
    <div className={styles.pokemon}>
      <Container>
        <div className={styles.pokemon_container}>
          {pokemon ? (
            <>
              <div className={styles.pokemon_wrapper}>
                <div className={styles.pokemon_image}>
                  <Img src={pokemon.sprites.front_default} />
                </div>
                <MainInfos pokemon={pokemon} />
              </div>

              <div className={styles.pokemon_informations}>
                <div className={styles.pokemon_characteristic}>
                  <ContainerPokemon>
                    <h2>Characteristic:</h2>
                    <p>{findEnglish()}</p>
                  </ContainerPokemon>
                </div>

                <div className={styles.pokemon_ability}>
                  <ContainerPokemon>
                    <h2>Abilities:</h2>
                    {abilities && <Ability abilities={abilities} />}
                  </ContainerPokemon>
                </div>
              </div>
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </Container>
    </div>
  );
}
