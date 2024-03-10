"use client";

import { LegacyRef, ReactNode, createContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { PokemonType } from "@/@types/Pokemons";

interface ContextType {
  inputRef: LegacyRef<HTMLInputElement> | undefined;
  submitSearch: () => Promise<void>;
  pokemon: PokemonType | null;
}

export const SearchContext = createContext({} as ContextType);

export function SearchProvider({ children }: { children: ReactNode }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const router = useRouter();

  async function submitSearch() {
    const input = inputRef.current;
    if (!input || !input.value) return;

    const pokemon = input.value;

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    if (!response.data) return;

    router.push(`/pokemon/${pokemon}`);
  }

  return (
    <SearchContext.Provider value={{ inputRef, submitSearch, pokemon }}>
      {children}
    </SearchContext.Provider>
  );
}
