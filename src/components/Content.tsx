import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

interface Content {
  title: string;
  movies: Array<MovieProps>;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: Content) {
return (
  <div className="container">
    <header>
      <span className="category">Categoria:<span> {props.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
)
}