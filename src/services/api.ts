import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://60b56592fe923b0017c84005.mockapi.io/cartAPI/v1',
});