import axios, { AxiosRequestConfig } from "axios";

type Headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
};

let headers: Headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "",
};

//local
const baseUrl = "http://localhost:3000/api/";

//本番
// const baseUrl = "http://localhost:3001/api/";

export const get = async (
  url: string,
  data?: { [key: string]: any },
  token?: string
) => {
  headers.Authorization = token ? `${token}` : "";

  const config: AxiosRequestConfig = {
    headers,
    params: data,
  };

  const res = await axios.get(baseUrl + url, config);

  return res;
};

export const post = async (
  url: string,
  data: { [key: string]: any },
  token?: string
) => {
  headers.Authorization = token ? `${token}` : "";

  const config: AxiosRequestConfig = {
    headers,
  };

  const res = await axios.post(baseUrl + url, data, config);

  return res;
};
