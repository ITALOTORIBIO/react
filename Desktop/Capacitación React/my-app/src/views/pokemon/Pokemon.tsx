import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { getData } from '../../services';
import { Pokemon as PokemonModel } from '../../models';
import axios from 'axios'

interface ResultsProps {
    name?: string,
    url?: string
}

const Pokemon = () => {

    const [pokemones, setPokemones] = useState<PokemonModel[]>([])
    const [showPokemones, setShowPokemones] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData()
            if (result.status === 200) {
                result.data.results.map(async (item: ResultsProps, index: number) => (
                    await axios.get(`${item.url}`)
                    .then((res) => {
                        const pokemon: PokemonModel = { id: res.data.id, name: res.data.name, detail: { name: res.data.name, image: res.data.sprites.front_default }}
                        setPokemones((prevPokemones) => [...prevPokemones, pokemon])
                    })
                ))
            }
        }
        fetchData();
    }, [])

    const handleClickShowPokemones = () => {
        setShowPokemones(!showPokemones)
    }

    return (
        <div className='bg-gray-800'>
            <div className='max-w-5xl mx-auto min-h-screen'>
                <Typography variant='h3' className='text-white text-center py-6 font-bold'>Pokemon</Typography>
                <div className='mx-10 pt-5'>
                    <Button onClick={handleClickShowPokemones} className='bg-emerald-800' variant="contained">Listar Pokemones</Button>
                </div>
                <div className='mx-10 pt-10'>
                    {(
                        <div className='grid grid-cols-3 gap-3'>
                            {pokemones.map((pokemon, index) => (
                                <Card key={index} sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {pokemon.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">
                                            <Link to={`/pokemon/${pokemon.id}`}>
                                                Más Información
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Pokemon