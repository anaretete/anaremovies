window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: "https://schoolstreamproxy.netlify.app/",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OThlNmJiZTRmYTA0NjQxODBkN2FkMWIwNjUyOTIyMyIsIm5iZiI6MTc1OTYzNDQ4NS41MDIsInN1YiI6IjY4ZTFlNDM1MTAzOTU1YWE5OWY4MTJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QVfU_CJ2ge5GzGFvO4rM_Yd80sKf3NK5ZoCO6sTskrs",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with
  VITE_BACKEND_URL: null,

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: ""
};
