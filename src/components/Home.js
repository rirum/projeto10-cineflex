import styled from "styled-components";
import StyledHeader from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home(){
const [movies, setMovies] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(URL);
        promise.then(response => setMovies(response.data));
        promise.catch(error => console.log(error.response.data));
    } ,[]
    
    )


    return (
        <HomeContainer>
                <StyledHeader/>
                <StyledText>
                    Selecione o filme
                </StyledText>
                <ContainerMovies>

                    {movies.map(movie => (
                    <StyledMovies key={movie.id}>
                    <img src={movie.posterURL} alt={movie.title}/>
                    </StyledMovies>
                    ))}
                    
                </ContainerMovies>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
align-items: center;
 
 
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

const ContainerMovies = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
justify-content: space-around;

`

const StyledMovies = styled.div`
 width: 145px;
 height: 209px;
 display: flex;
 justify-content: center;
 border: 8 solid white;
 border-radius: 3px;
 padding-bottom:8px;
 box-shadow: 0 2 4 2 rgba(0, 0, 0, 0.1);
 img{ 
    width: 129px;
    height: 193px;}
`