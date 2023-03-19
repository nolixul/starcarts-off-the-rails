import axios from "axios";

const swapApi = axios.create({baseURL: 'https://swapi.py4e.com/api/'})

export const getFilms = async () => {
    const { data } = await swapApi.get('/films')
    return data
}
