import { GET } from "./api.js";
import { cE, qS, movieCardGen } from "./utils.js";

// fetch(
//   "https://api.themoviedb.org/3/movie/550?api_key=99a1b01aa1f18740e52f075068c4776b"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const serietvEl = qS(".serietv");

GET("tv", "popular").then((data) =>
  data.results.map((tv) => serietvEl.append(movieCardGen(tv)))
);

// const obj = {
//   backdrop_path: "/qcpC9lv6VLL4Zw45EveYELyje1w.jpg",
//   first_air_date: "2020-10-05",
//   genre_ids: [18, 10766, 10751],
//   id: 111453,
//   name: "Gumm Hai Kisi Ke Pyaar Mein",
//   origin_country: ["IN"],
//   original_language: "hi",
//   original_name: "घुम है किसिकी प्यार में",
//   overview:
//     "Virat sacrifices his love to honour the promise he made to a dying man. Trapped between the past and the present, will he find love beyond the chains of duty?",
//   popularity: 1789.938,
//   poster_path: "/uNjnoT3RChs2r7O9pDyx7TNBvIj.jpg",
//   vote_average: 5.5,
//   vote_count: 24,
// };

// const vaiEl = qS("vistaserie");

// document.body.append(movieCardGen(obj));
