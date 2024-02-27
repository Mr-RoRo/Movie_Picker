export interface MovieAndTVshow {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Genres {
  id: number;
  name: string;
}

export interface SortedItems {
  id: number;
  name: string;
  label: string;
}
