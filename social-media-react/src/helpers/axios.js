import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import authSlice from "../state/slices/auth";
import store from "../state";

const axiosService = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.staging.quatroapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosService.interceptors.request.use(async (config) => {
  const { token } = store.getState().auth;
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosService.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err),
);

const refreshAuthLogic = async (failedRequest) => {
  const { refreshToken } = store.getState().auth;
  return axios
    .post("/refresh/token/", null, {
      baseURL: process.env.REACT_APP_API_BASE_URL || "https://api.staging.quatroapp.com",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
    .then((resp) => {
      const { token, refresh } = resp.data;
      failedRequest.response.config.headers["Authorization"] = "Bearer " + token;
      store.dispatch(authSlice.actions.setAuthTokens({ token, refreshToken: refresh }));
    })
    .catch((err) => {
      store.dispatch(authSlice.actions.setLogout());
    });
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export function fetcher(url) {
  return axiosService.get(url).then((res) => res.data);
}

export default axiosService;
