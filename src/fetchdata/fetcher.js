import axios from 'axios'

const serverRoot = process.env.API_ROOT

const jsonFetcher = axios.create({
  baseURL: serverRoot,
  responseType: 'json',
  timeout: 2000
})

export {jsonFetcher, serverRoot}
