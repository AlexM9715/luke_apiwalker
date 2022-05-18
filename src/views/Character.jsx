import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Character = () => {

    const {id} = useParams()
    const [people, setPeople] = useState()
    const [planetInfo, setPlanetInfo] = useState({})

    const getPlanetInfo = (url) => {
        axios.get(url)
        .then(response=> {
            setPlanetInfo(response.data)
        })
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response.data)
            setPeople(response.data)
            getPlanetInfo(response.data.homeworld)
        })
        .catch(err=>console.log(err))
    },[id])

    return (
        <div>
            {
                people?
                <div>
                    <h3>Name: {people.name}</h3>
                    <h4>Homeworld: {planetInfo.name}</h4>
                    <h4>Birth Year: {people.birth_year}</h4>
                    <h4>Height: {people.height}</h4>
                    <h4>Hair Color: {people.hair_color}</h4>
                </div>:
                <img src={"https://static.wikia.nocookie.net/star-wars-memes/images/e/e4/NotTheDroids.png"} alt="" />
            }
        </div>
    )
}

export default Character
