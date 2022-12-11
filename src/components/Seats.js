import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";



export default function Seats({setTicket}) {

    const { idSessao } = useParams();
    const [ seat, setSeat ] = useState(undefined);
    const [ name, setName ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ movie, setMovie ] = useState ({});
    const [ day, setDay ] = useState ({});
    const [ seatSelected, setSeatSelected ] = useState([]);
    
    const navigate = useNavigate();  

    useEffect(() => {        
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            setSeat(response.data)
            setMovie(response.data.movie)
            setDay(response.data.day)
        });
        promise.catch((error) => console.log(error))
    }, []) 

    if( seat === undefined) {
        return <img align="center" src="./assets/loading.gif" alt="loading"/>;
    }

    function selected (id, assento) {
        let array = []
        if(!seatSelected.includes(id) && assento) {
                const newArray = seatSelected.filter((element) => element !== id)
                setSeatSelected(newArray)
                
        } else if (!seatSelected.includes(id)) {
            array = [...seatSelected, id]
            setSeatSelected(array);
            console.log(array);
        }
        if (assento === true) {
            alert("Esse assento não está disponível")
        }
    }

    function buyTickets(e){
        e.preventDefault();
        const body = { ids:seatSelected, name: name, cpf: cpf };
        console.log(body);
        const ticket = {
            ids:seatSelected,
            name: name,
            cpf: cpf,
            day: day.date,
            title: movie.title,
            weekday: day.weekday,
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', body);
        promise.then (() => {
            if(seatSelected.length !== 0) {
                navigate('/sucesso');
                setTicket(ticket);
                console.log(ticket + 'ticket');
            } else {
                alert("Você não escolheu um assento")
            }
        })
        promise.catch('Erro na requisição');
        console.log('buy tickets');
    }

 
    return (
        <HomeContainer>
        <StyledText>
            Selecione o(s) assento(s)
        </StyledText>
            <ContainerSeats>
            {
                seat.seats.map((assento, id) => (
                    <StyledSeats 
                    active={seatSelected.includes(assento.id)}
                    corAssento={assento.isAvailable}
                    key={assento.name}
                    name={assento.name} 
                    id={id+1}
                    data-test="seat" 
                    onClick={() => assento.isAvailable ? selected(assento.id) : alert("Esse assento não está disponível")}
                    seatSelected={seatSelected}
                    className={assento.isAvailable ? 'unavailable' : 'available'}> { assento.name } </StyledSeats>
                ))                
            }
            
        </ContainerSeats>

        <ContainerAvailability>
        <ExampleContainer ><SeatSelected> </SeatSelected><p>Selecionado</p></ExampleContainer>
        <ExampleContainer><SeatAvailable> </SeatAvailable><p>Disponível</p></ExampleContainer>
        <ExampleContainer><SeatUnavailable> </SeatUnavailable><p>Indisponível</p></ExampleContainer>
        </ContainerAvailability>
        
        <ContainerInputs onSubmit={buyTickets}>
            <ContainerNome htmlFor="name">
            <p>Nome do Comprador:</p>
            <input 
            data-test="client-name"
            id="name"
            onChange={e => setName(e.target.value)} 
            placeholder="Digite seu nome..." 
            type="text" 
          
            required />
            </ContainerNome>
            <ContainerCPF htmlFor="cpf">
            <p>CPF do Comprador:</p>
            <input 
            data-test="client-cpf"
            id="cpf"
            onChange={e => setCpf(e.target.value)} 
            placeholder="Digite seu CPF..." 
            type="text" 
            
            required />
            </ContainerCPF>

            <StyledButton data-test='book-seat-btn' type='submit' > <h1> Reservar assento(s) </h1> </StyledButton>
            
        </ContainerInputs>        
        
                <ContainerFooter>
                  
                <Footer data-test="footer"  title={movie.title}> <img src={`${movie.posterURL}`} alt={movie.title}/> 
                <TextAlign>
                <h1>{`${movie.title}`}</h1>
                <h2>{`${day.weekday} - ${day.date}`} </h2>
                </TextAlign>
                </Footer>
                
                </ContainerFooter>

        </HomeContainer>

        
    )
}



const HomeContainer = styled.div`
background-color: #E5E5E5;
height: 800px;
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
const ContainerSeats = styled.div`
width: 350px;
height: 202px;
display: flex;
flex-wrap: wrap;
margin-left: 10px;
margin: 0 auto;

`

const StyledSeats = styled.button`
width: 26px;
height: 26px;
border-radius: 12px;
background-color: ${(props) => props.active ? "#1AAE9E" : props.corAssento ? "#C3CFD9" : "#F7C52B"};
border: 1px solid #808f9d;
align-items: center;
font-family: "Roboto", sans-serif;
font-size: 11px;
justify-content: center;
color: #000;
display: flex;
margin-left: 7px;
margin-bottom: 18px;
.available {
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
}
.unavailable{
    background-color: #FBE192;
    border: 1px solid #F7C52B;
}

`

const ContainerAvailability = styled.div`
width: 375px;
margin: 0 auto;
margin-top: 30px;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const ExampleContainer = styled.div`
text-align: center;
width: 91px;
justify-content: center;
p{
font-family: 'Roboto', sans-serif;
font-size: 13px;
color: #4e5a65;
}
`
const SeatSelected = styled.div`
width: 26px;
height: 26px;
border-radius: 17px;
background-color:#1AAE9E;
border: 1px solid #0E7D71;
display: flex;
margin: 0 auto;

`

const SeatAvailable = styled.div`
width: 26px;
height: 26px;
border-radius: 17px;
background-color:#C3CFD9;
border: 1px solid #7B8B99;
display: flex;
margin: 0 auto;
p{
font-family: 'Roboto', sans-serif;
font-size: 13px;
color: #4e5a65;

}
`


const SeatUnavailable = styled.div`
width: 26px;
height: 26px;
border-radius: 17px;
background-color:#FBE192;
border: 1px solid #F7C52B;
display: flex;
margin: 0 auto;
p{ 
font-family: 'Roboto', sans-serif;
font-size: 13px;
color: #4e5a65;
}
`

const ContainerInputs = styled.form`
font-family: "Roboto", sans-serif;
font-size: 18px;
color: #293845;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin: 0 auto;
width: 375px;

`
const ContainerNome = styled.label`
margin-top: 14px;
margin-bottom: 14px;
justify-content: center;
input { 
::placeholder {
    color: #afafaf;
    font-style: italic;
} 
}

`

const ContainerCPF = styled.label`
margin-top: 14px;
margin-bottom: 14px;
input { 
::placeholder {
    color: #afafaf;
    font-style: italic;
} 
}

`
const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    border-color: #E8833A;
    margin-bottom: 7px;
        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            
        }
`


const ContainerFooter = styled.div`
display: flex;
align-items: center;
margin-left: 24px;
width: 100%;
height: 117px;
justify-content: center;

margin: 0 auto;

`
const Footer = styled.div`
width: 100%;
height: 117px;
background-color: #DFE6ED;
color: #293845;
position: fixed;
bottom: 0px;
left: 0px;
font-family:'Roboto', sans-serif;
font-size:26px;
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid #9EADBA;

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
const TextAlign= styled.div`
display: flex;
flex-direction: column;
width: 375px;
`