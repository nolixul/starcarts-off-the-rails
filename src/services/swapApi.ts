import axios from "axios";

const swapApi = axios.create({baseURL: 'https://swapi.py4e.com/api/'})

export const getFilms = async (): Promise<object> => {
    const { data } = await swapApi.get('/films')
    return data
}

export const getCharacters = async (pageId: number): Promise<object> => {
    const { data } = await swapApi.get('/people', {
        params: {
            page: pageId
        }
    })
    return data
}
