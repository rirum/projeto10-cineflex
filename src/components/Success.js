import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success(ticket, setTicket) {
    const navigate = useNavigate();
    function returnHome(){
        navigate("/");
        setTicket();
    }
    return(
    <HomeContainer>
        <StyledText>
            Pedido feito com sucesso!
        </StyledText>
        <MovieInfo data-test="movie-info">
            <h1>Fonte e Sessão:</h1>
            <p>{ticket.title}</p>
            <p>{ticket.weekday} - {ticket.day}</p>
        </MovieInfo>
        <SeatsInfo data-test="seats-info">

        </SeatsInfo>

        <ClientInfo data-test="client-info">

        </ClientInfo>

        <BackButton data-test="go-home-btn" onClick={returnHome}>
            Voltar para Home
        </BackButton>
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
color: #247A6B;
display: flex;
justify-content: center;
height: 110px;
`
const MovieInfo = styled.div`
font-family: 'Roboto', sans-serif;
width: 374px;
height: 110px;
h1{
    color: #293845;
    font-weight: 700;
    font-size: 24px;
}
p{
    color: #293845;
    font-size: 22px;
}
`

const BackButton = styled.div`
width: 225px;
height: 42px;
background-color: #E8833A;
border-radius: 3px;
font-family: "Roboto", sans-serif;
color: #fff;
align-items: center;
margin: 0 auto;
justify-content: center;
display: flex;
`