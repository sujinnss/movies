import axios from "axios";
const TMDB_KEY = "9ed4eb13a56f6ed7038cb5ab9370a691";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    // 원래는 return result 이지만 좀더 보기 좋게 만들기위해 배열로 만들었다
    // [A,B]에서 A는 첫번째 엘리먼트는 result가 될거고, 두번째는 error가 됨.
    return [results || data, null];
  } catch (e) {
    console.error(e);
    // 첫번째 엘리먼트가 null인 이유는  result가 없기때문에 null이고 ,
    // 두번째 엘리먼트는 error 자리이기때문에 e
    return [null, e];
  }
};

export const movieApi = {
  noPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (query) => getAnything("/search/movie", { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie"),
};
export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
