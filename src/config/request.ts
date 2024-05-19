import axios from 'axios';

import { appConfig } from '@/config//app.config';

const axiosInstance = axios.create({
  baseURL: appConfig.baseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data)
);

export const postReq = async (url: string, reqBody: AnyType) => {
  const { data } = await axiosInstance.post(url, reqBody);

  return data;
};
