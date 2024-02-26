import { create } from "zustand";
import { Genres } from "./hooks/types";

interface GenresStore {
  genres: Genres[];
  setGenres: (genres: Genres[]) => void;
}

const useGenreStore = create<GenresStore>((set) => ({
  genres: [{ id: 0, name: "" }],
  setGenres: (newGenres) =>
    set((prev) => ({
      genres: [...prev.genres, ...newGenres],
    })),
}));

export default useGenreStore;
