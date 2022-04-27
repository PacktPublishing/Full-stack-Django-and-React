import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import authSlice from "../store/slices/auth";
import store from "../store";

const axiosService = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosService.interceptors.request.use(async (config) => {
  /**
   * Retrieving the access token from the store and add it to the headers of the request
   */
  const { access } = store.getState().auth;
  config.headers.Authorization = `Bearer ${access}`;
  return config;
});

axiosService.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err),
);

const refreshAuthLogic = async (failedRequest) => {
  const { refresh } = store.getState().auth;
  return axios
    .post("/refresh/token/", null, {
      baseURL: "http://localhost:8000",
      headers: {
        Authorization: `Bearer ${refresh}`,
      },
    })
    .then((resp) => {
      const { access, refresh } = resp.data;
      failedRequest.response.config.headers["Authorization"] = "Bearer " + access;
      store.dispatch(authSlice.actions.setTokens({ access, refresh }));
    })
    .catch(() => {
      store.dispatch(authSlice.actions.clearTokens());
    });
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export function fetcher(url) {
  return axiosService.get(url).then((res) => res.data);
}

export default axiosService;
