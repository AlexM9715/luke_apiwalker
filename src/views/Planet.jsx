import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Planet = () => {

    const {id} = useParams()
    const [planets, setPlanets] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{
            console.log(response.data)
            setPlanets(response.data)
        })
        .catch(err=>console.log(err))
    },[id])

    return (
        <div>
            {
                planets?
                <div>
                    <h3>Planet: {planets.name}</h3>
                    <h4>Climate: {planets.climate}</h4>
                    <h4>Terrain: {planets.terrain}</h4>
                    <h4>Population: {planets.population}</h4>
                    <h4>Diameter: {planets.diameter}</h4>
                </div>:
                <img src="https://images.immediate.co.uk/production/volatile/sites/3/2017/08/137301.cd96e228-6b6d-4c97-a439-6a80255781d7.gif" alt="" />
            }
        </div>
    )
}

export default Planet