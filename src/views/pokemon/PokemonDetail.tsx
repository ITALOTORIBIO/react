import React, { FunctionComponent } from 'react'
import { PokemonDetail as PokemonDetailModel } from '../../models'
import { useState } from 'react';
import axios from 'axios';

const PokemonDetail: FunctionComponent<any> = ({ id }: any) => {

    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailModel>()

    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`

    const result = axios.get(URL)
    .then((response) => {
        setPokemonDetail({ name: response.data.name, image: response.data.sprites.front_default })
    })

    return (
        <div className='bg-zinc-700'>
            <div className='max-w-5xl mx-auto min-h-screen'>
                <div className=''>
                    <h2>{pokemonDetail?.name}</h2>
                    <img src={pokemonDetail?.image} alt={pokemonDetail?.name} />
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail