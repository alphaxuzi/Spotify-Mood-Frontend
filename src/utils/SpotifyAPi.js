
const BASE_URL = "https://api.spotify.com";
const REDIRECT_URI = "http://localhost:5173";
const CLIENT_ID = "f54572c8a21049bea1033c4014562eae";
const CLIENT_SECRET = "de73c3b57ccc487da30046dffafab802";
const SCOPE = "playlist-read-private user-library-read";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=${encodeURIComponent(SCOPE)}`;

const loginWithSpotify = () => {
  window.location.href = AUTH_URL;
};

const _getTokenFromUrl = () => {
  const hash = location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const token = params.get("access_token");

  if (token) {
    window.history.replaceState({}, document.title, "/");
  }
  return token
};

let accessToken = null;

const authenticateSpotify = () => {
  if (accessToken) {
    return accessToken;
  }

  accessToken = _getTokenFromUrl();

  if (!accessToken) {
   loginWithSpotify();
  } 

  return accessToken;
};




const fetchPlaylist = async (mood) => {
if (!accessToken) {
  accessToken = authenticateSpotify();
}

console.log("Using Access Token:", accessToken);

  if (!accessToken) {
    throw new Error("Access token is not available.");
  }

  const response = await fetch(
    `https://api.spotify.com/v1/recommendations?seed_genres=${mood}&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`failed to fetch playlists: ${response.status}`);
  }

  const data = await response.json();
  console.log("Fetched tracks:", data.tracks);
  return data.tracks;
};

const fetchAvailableGenres = async () => {
  const token = await _getToken();
  const response = await fetch(
    `${BASE_URL}/v1/recommendations/available-genre-seeds`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch available genres: ${response.status}`);
  }
  const data = await response.json();
  console.log("Available genres:", data.genres);
  return data.genres;
};

export { authenticateSpotify, fetchPlaylist, fetchAvailableGenres };
