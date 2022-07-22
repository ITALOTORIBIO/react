import { Pokemon } from "../../models";
import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=50'

const getData = async () => {
    return await axios({
        method:'get',
        url: URL
    }).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}

export default getData