import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backend-develfood-wow5.vercel.app',
})