import { PokemonType } from "@/@types/Pokemons";
import styles from "@/styles/pages/pokemon/MainInfos.module.scss";

import Info from "@/app/components/pages/pokemon/Info";
import Types from "@/app/components/pages/pokemon/Types";

interface PropsType {
  pokemon: PokemonType;
}

export default function MainInfos(props: PropsType) {
  const { pokemon } = props;

  function capitalizeString(str: string) {
    return str ? `${str[0].toUpperCase()}${str.substring(1)}` : "";
  }

  function transform(height: number) {
    return (height / 10).toFixed(1);
  }
  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemon_name}>
        <h1>{capitalizeString(pokemon.name)}</h1>
      </div>
      <div className={styles.pokemon_info}>
        <Info title="Nº" info={pokemon.id} />
        <Info title="Height" info={`${transform(pokemon.height)}m`} />
        <Info title="Weight" info={`${transform(pokemon.weight)}kg`} />
        <Types types={pokemon.types} />
      </div>
    </div>
  );
}
