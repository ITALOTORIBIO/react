import React from 'react'
import { useParams } from 'react-router-dom';
import { PokemonDetail } from '../views'

const PokemonDetailLayout = () => {
    const { id } = useParams()

    return (
        <PokemonDetail id={id} />
    )
}

export default PokemonDetailLayout