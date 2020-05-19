export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { token },
      } = store.getState();

      if (token) {
        config.headers.Authorization = token;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
}
