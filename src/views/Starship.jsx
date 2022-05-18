import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Starship = () => {

    const {id} = useParams()
    const [starships, setStarships] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
        .then(response=>{
            console.log(response.data)
            setStarships(response.data)
        })
        .catch(err=>console.log(err))
    },[id])


    return (
        <div>
            {
                starships?
                <div>
                    <h3>Name: {starships.name}</h3>
                    <h4>Model: {starships.model}</h4>
                    <h4>Passenger Count: {starships.passengers}</h4>
                    <h4>Created: {starships.created}</h4>
                    <h4>Pilot: {starships.pilots}</h4>
                </div>:
                <img src={"https://www.bardissi.net/images/easyblog_shared/May_2015/5-4-15/targeting_computer_in_blog_4.gif"} alt="" />
            }
        </div>
    )
}

export default Starship