import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1"

export const ApiUrl = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

console.log(apiUrl)
