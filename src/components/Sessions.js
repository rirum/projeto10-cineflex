import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";



export default function Sessions(){
    const { idFilme } = useParams() 
    const [session, setSession ] = useState(undefined);   
    // const { weekday, date, showtimes } = sessionData; 

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        
        promise.then((response) => setSession(response.data))        
        promise.catch ((error)=> console.log(error))

    }, [])

    if (session === undefined) {
        return <img align="center" src="./assets/loading.gif" alt="loading"/>;
    }

    return (
        <HomeContainer>
        <StyledText>
            Selecione o horário            
        </StyledText>
        {session.days.map(day => (
            <>
            <ContainerText>
             <TextSession key={day.id}>{day.weekday} - {day.date}</TextSession>
             </ContainerText>
             
                <ContainerHour>
             { 
                day.showtimes.map(showTime => (
                    <Link to={`/assentos/${showTime.id}`} style={{ textDecoration: 'none' }}>
                        <HourSession key={showTime.id}><p> { showTime.name } </p> </HourSession>
                    </Link>
                )) 
             }
                    </ContainerHour>
            </>
            
            ))}
      
               <ContainerFooter>
                <Footer><img src={session.posterURL} alt={session.title}/> { session.title } </Footer>
                
                </ContainerFooter>
    
         </HomeContainer>
    )     
}

const HomeContainer = styled.div`
align-items: center;
background-color: #E5E5E5;
 
`

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

const ContainerText = styled.div`
display: flex;
align-items: center;
margin-left: 24px;
width: 375px;
justify-content: flex-start;
margin: 0 auto;

`

const TextSession = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: #293845;
margin-bottom: 22px;
margin-top: 22px;


`

const ContainerHour = styled.div`
display: flex;
width: 375px;
margin: 0 auto;
justify-content: flex-start;
gap: 9px;


`

const HourSession = styled.div`
width: 83px;
height: 43px;
background-color: #e8833a;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;
color: white;
font-size: 18px;
border-radius: 3px;
margin-bottom: 7px;

`


const ContainerFooter = styled.div`
display: flex;
align-items: center;
margin-left: 24px;
width: 100%;
justify-content: center;
background-color: #DFE6ED;
margin: 0 auto;
border-top: 1px solid #9EADBA;
`
const Footer = styled.div`
width: 375px;
height: 117px;
color: #293845;
position: sticky;
bottom: 0px;
left: 0px;
font-family:'Roboto', sans-serif;
font-size:26px;
display: flex;
align-items: flex-start;
align-items: center;

img{
    width:48px;
    height: 72px;
    border: 8px solid white;
    border-radius: 2px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-right: 14px;
    margin-left: 7px;
}
`