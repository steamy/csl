import axios from 'axios'

const jsonFetcher = axios.create({
  baseURL: 'http://localhost:8001',
  responseType: 'json',
  timeout: 2000
})

export {jsonFetcher}
