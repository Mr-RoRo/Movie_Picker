import { create } from "zustand";
import { Genres } from "./hooks/types";

interface GenresStore {
  genres: Genres[];
  setGenres: (genres: Genres[]) => void;
}

interface SearchStore {
  search: string;
  setSearch: (search: string) => void;
}

export const useGenreStore = create<GenresStore>((set) => ({
  genres: [{ id: 0, name: "" }],
  setGenres: (newGenres) =>
    set((prev) => ({
      genres: [...prev.genres, ...newGenres],
    })),
}));

export const useSearch = create<SearchStore>((set) => ({
  search: "",
  setSearch: (search: string) => set(() => ({ search: search })),
}));
