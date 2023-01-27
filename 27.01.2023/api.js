const API_Key = "99a1b01aa1f18740e52f075068c4776b";
const base_url = "https://api.themoviedb.org/3/";

const GET = async (type = "movie", resource = "550") => {
  const res = await fetch(`${base_url}${type}/${resource}?api_key=${API_Key}`);
  const data = await res.json();
  return data;
};

export { GET };
