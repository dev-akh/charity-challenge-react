import axios from 'axios';
import { API_BASE_URL } from '../config/app';

export const ENDPOINTS = {
    charities: '/charities',
    payments : '/payments',
    // Add more endpoints as needed
  };

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        common: {
        'Content-Type': 'application/json',
        // Add any other static headers here
        },
    },
});

const createRequest = async (config) => {
    const response = await api(config);
    return response.data;
};

export const get = (endpoint, params = {}) => {
    return createRequest({ method: 'get', url: endpoint, params });
};

export const post = (endpoint, data, headers = {}) => {
  return createRequest({
    method: 'post',
    url: endpoint,
    data,
    headers: {
      ...api.defaults.headers.common,
      ...headers,
    },
  });
};
