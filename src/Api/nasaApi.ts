import axios from "axios"

const imagesUrl = 'https://images-api.nasa.gov'
const commonUrl = 'https://api.nasa.gov'

export const dataApi = axios.create({
    baseURL:imagesUrl})

export const commonAPI = axios.create({
    baseURL:commonUrl
})

