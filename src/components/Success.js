import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success({ticket, setTicket}) {
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
            <p>{ticket.day} {ticket.hour}</p>
        </MovieInfo>
       
        <SeatsInfo data-test="seats-info">
        <h1>Ingressos:</h1>
        {ticket.ids.map((elemento) =><p key={elemento.id}> Assento {elemento.name} </p>)}
        
        </SeatsInfo>

        <ClientInfo data-test="client-info">
        <h1>Comprador:</h1> 
        <p>{`Nome:${ticket.name}`}</p>
        <p>{`CPF:${ticket.cpf}`}</p>
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
height: 800px;
 
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
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;

h1{
    color: #293845;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
}
p{
    color: #293845;
    font-size: 22px;
    margin-bottom:5px;
}
`
const SeatsInfo = styled.div`
font-family: 'Roboto', sans-serif;
width: 374px;
margin: 0 auto;
h1{
    color: #293845;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;
}
p{
    color: #293845;
    font-size: 22px;
    margin-bottom: 5px;
}
`

const ClientInfo = styled.div`
font-family: 'Roboto', sans-serif;
width: 374px;
height: 110px;
margin: 0 auto;
h1{
    color: #293845;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
}
p{
    color: #293845;
    font-size: 22px;
    margin-bottom: 5px;
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