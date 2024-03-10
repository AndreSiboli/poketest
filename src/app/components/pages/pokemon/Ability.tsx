import { PokemonAbilitiesType } from "@/@types/Pokemons";
import styles from "@/styles/pages/pokemon/Ability.module.scss";

interface PropsType {
  abilities: PokemonAbilitiesType[];
}

export default function Ability(props: PropsType) {
  const { abilities } = props;

  function getEnglishName(name: PokemonAbilitiesType["names"]) {
    if (!name) return "We can't find any name.";

    const abil = name.filter((ab) => ab.language.name === "en")[0];

    if (!abil) return "We can't find this name.";

    return abil.name;
  }

  function getEnglishAbility(ability: PokemonAbilitiesType["effect_entries"]) {
    if (!ability) return "We can't find any ability.";

    const abil = ability.filter((ab) => ab.language.name === "en")[0];

    if (!abil) return "We can't find this ability.";

    return abil.short_effect;
  }

  return (
    <div className={styles.ability}>
      {abilities.map((ab) => (
        <div className={styles.ability_info} key={ab.id}>
          <h3>{getEnglishName(ab.names)}</h3>
          <p>{getEnglishAbility(ab.effect_entries)}</p>
        </div>
      ))}
    </div>
  );
}
