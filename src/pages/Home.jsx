import MovieList from "../components/MovieList/MovieList";

export default function Home({ films }) {
  return <MovieList films={films} />;
}
