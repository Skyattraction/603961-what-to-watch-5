import {ALL_GENRES} from "./const";
import {initialState} from './store/reducers/films-data/films-data';

const {films, genres} = initialState;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getGenresList = () => {

  const genreList = [ALL_GENRES];

  for (let genre of genres) {
    genreList.push((genre));
  }
  const updatedGenresList = new Set(genreList.slice(0, 10));
  return Array.from(updatedGenresList);
};

export const getFilmsByGenre = (activeGenre) => {

  const filmsByGenre = [];

  films.forEach((film) => {
    if (activeGenre === film.genre) {
      filmsByGenre.push(film);
    }
  });

  if (activeGenre === ALL_GENRES) {
    return films;
  } else {
    return filmsByGenre;
  }
};

export const getVideoTimePosition = (timeDuration) => {
  if (timeDuration) {
    const timeFormat = (time) => {
      return (time < 10) ? `0` + time : time;
    };
    const hours = timeFormat(Math.floor(timeDuration / 3600));
    const minutes = timeFormat(Math.floor((timeDuration - (hours * 3600)) / 60));
    const seconds = timeFormat(Math.round(timeDuration - (hours * 3600) - (minutes * 60)));
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `00:00:00`;
  }
};

export const getVideoProgressPosition = (video) => {
  if (video.currentTime) {
    return Math.floor(Math.floor(video.currentTime) / (Math.floor(video.duration) / 100));
  } else {
    return 0;
  }
};

export const mapPropsNames = (film) => {
  const mapProps = extend(film, {
    id: film.id,
    name: film.name,
    genre: film.genre,
    description: film.description,
    rating: film.rating,
    director: film.director,
    starring: film.starring,
    released: film.released,
    backgroundColor: film.background_color,
    previewImage: film.preview_image,
    posterImage: film.poster_image,
    backgroundImage: film.background_image,
    scoresCount: film.scores_count,
    isFavorite: film.is_favorite,
    runTime: film.run_time,
    previewVideoLink: film.preview_video_link,
    videoLink: film.video_link
  });

  return mapProps;
};
