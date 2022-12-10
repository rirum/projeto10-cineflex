import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";



export default function Sessions(){
    const { idFilme } = useParams() 
    const [session, setSession ] = useState(undefined);

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => setSession(response.data))
        promise.catch ((error)=> console.log(error))
    })

    if (session === undefined) {
        return <img align="center" src="./assets/loading.gif" alt="loading"/>;
    }
    return (
        <>
        <StyledText>
            Selecione o horário
            
        </StyledText>
        {session.days.map(data => (
            <>
             <TextSession key={data.id}>{data.weekday} - {data.date}</TextSession>
              <HourSession key={data.name}><p>{data.showtimes.name}</p></HourSession>
            </>
            
            ))}
      
               <>
                <Footer> poster + nome filme</Footer>
                
                </>
    
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
margin-bottom: 22px;
margin-top: 22px;
align-items: center;
display: flex;
justify-content: center;

`

const HourSession = styled.div`
width: 83px;
height: 43px;
background-color: #e8833a;
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
color: white;
font-size: 18px;
margin: 0 auto;
border-radius: 3px;
`

const Footer = styled.div`
width: 100%;
height: 117px;
background-color: #9EADBA;
color: #293845;
position: sticky;
bottom: 0px;
left: 0px;
font-family:'Roboto', sans-serif;
font-size:26px;
`