import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";



export default function Sessions(){
    const { idFilme } = useParams() 
    const [session, setSession ] = useState({});

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => setSession(response.data))
        promise.catch ((error)=> console.log(error))
    })

    return (
        <>
        <StyledText>
            Selecione o horário
            
        </StyledText>
        {session.days.map(data => (
            <>
             <TextSession>{data.weekday} - {data.date}</TextSession>
                <ButtonSession><p>{data.showtimes.name}</p></ButtonSession>
            </>
            ))}
            </>

    )
}


const StyledText = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 24px;
font-weight: 400;
align-items: center;
color: #293845;
display: flex;
justify-content: center;
height: 110px;
`

const TextSession = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: #293845;

`

const ButtonSession = styled.div`
width: 83px;
height: 43px;
background-color: pink;
p{
    color: white;}
`