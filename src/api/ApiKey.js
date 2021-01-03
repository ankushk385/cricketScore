const Api = "1V2ntL1or1MRBfNKsFOFXFJ0Eg12";

export const getApiKey = () => {
  const url = `https://cricapi.com/api/matches?apikey=${Api}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getStats = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${Api}&unique_id=${id}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
