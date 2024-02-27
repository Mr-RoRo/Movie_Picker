import { create } from "zustand";
import { Genres } from "./hooks/types";

export const initialGenres = [
  { id: 28, name: "Action" },

  { id: 12, name: "Adventure" },

  { id: 16, name: "Animation" },

  { id: 35, name: "Comedy" },

  { id: 80, name: "Crime" },

  { id: 99, name: "Documentary" },

  { id: 18, name: "Drama" },

  { id: 10751, name: "Family" },

  { id: 14, name: "Fantasy" },

  { id: 36, name: "History" },

  { id: 27, name: "Horror" },

  { id: 10402, name: "Music" },

  { id: 9648, name: "Mystery" },

  { id: 10749, name: "Romance" },

  { id: 878, name: "Science Fiction" },

  { id: 10770, name: "TV Movie" },

  { id: 53, name: "Thriller" },

  { id: 10752, name: "War" },

  { id: 37, name: "Western" },

  { id: 10759, name: "Action & Adventure" },

  { id: 16, name: "Animation" },

  { id: 35, name: "Comedy" },

  { id: 80, name: "Crime" },

  { id: 99, name: "Documentary" },

  { id: 18, name: "Drama" },

  { id: 10751, name: "Family" },

  { id: 10762, name: "Kids" },

  { id: 9648, name: "Mystery" },

  { id: 10763, name: "News" },

  { id: 10764, name: "Reality" },

  { id: 10765, name: "Sci-Fi & Fantasy" },

  { id: 10766, name: "Soap" },

  { id: 10767, name: "Talk" },

  { id: 10768, name: "War & Politics" },

  { id: 37, name: "Western" },
];

export const sortedItemsTVshows = [
  { id: 1, name: "name.asc", label: "name ↑" },
  { id: 2, name: "name.desc", label: "name ↓" },
  { id: 3, name: "vote_average.asc", label: "rating ↑" },
  { id: 4, name: "vote_average.desc", label: "rating ↓" },
  { id: 5, name: "first_air_date_year.asc", label: "release date ↑" },
  { id: 6, name: "first_air_date_year.desc", label: "release date ↓" },
  { id: 7, name: "popularity.asc", label: "popularity ↑" },
  { id: 8, name: "popularity.desc", label: "popularity ↓" },
];

export const sortedItemsMovies = [
  { id: 1, name: "title.asc", label: "title ↑" },
  { id: 2, name: "title.desc", label: "title ↓" },
  { id: 3, name: "vote_average.asc", label: "rating ↑" },
  { id: 4, name: "vote_average.desc", label: "rating ↓" },
  { id: 5, name: "primary_release_date.asc", label: "release date ↑" },
  { id: 6, name: "primary_release_date.desc", label: "release date ↓" },
  { id: 7, name: "popularity.asc", label: "popularity ↑" },
  { id: 8, name: "popularity.desc", label: "popularity ↓" },
];

interface GenresStore {
  genres: Genres[];
  setGenres: (genres: Genres[]) => void;
}

interface SearchStore {
  search: string;
  setSearch: (search: string) => void;
}

interface FilterStore {
  releaseYear: string;
  scoreUp: string;
  scoreDown: string;
  genre: string;
  sortBy: string;
  submit: string;
  setReleaseYear: (year: string) => void;
  setScoreUp: (scoreUp: string) => void;
  setScoreDown: (scoreDown: string) => void;
  setGenre: (genre: string) => void;
  setSortBy: (sortBy: string) => void;
  setSubmit: (submit: string) => void;
}

export const useGenreStore = create<GenresStore>((set) => ({
  genres: initialGenres,
  setGenres: (newGenres) =>
    set((prev) => ({
      genres: [...prev.genres, ...newGenres],
    })),
}));

export const useSearch = create<SearchStore>((set) => ({
  search: "",
  setSearch: (search: string) => set(() => ({ search: search })),
}));

export const useFilter = create<FilterStore>((set) => ({
  releaseYear: "",
  scoreUp: "",
  scoreDown: "",
  genre: "",
  sortBy: "",
  submit: "",
  setReleaseYear: (releaseYear: string) =>
    set(() => ({ releaseYear: releaseYear })),
  setSubmit: (submit: string) => set(() => ({ submit: submit })),
  setScoreUp: (scoreUp: string) => set(() => ({ scoreUp: scoreUp })),
  setScoreDown: (scoreDown: string) => set(() => ({ scoreDown: scoreDown })),
  setGenre: (genre: string) => set(() => ({ genre: genre })),
  setSortBy: (sortBy: string) => set(() => ({ sortBy: sortBy })),
}));
