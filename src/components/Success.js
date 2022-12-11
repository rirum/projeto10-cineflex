import styled from "styled-components";

export default function Success() {
    return(
    <HomeContainer>
        <StyledText>
            Pedido feito com sucesso!
        </StyledText>
        
        <BackButton>
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

const BackButton = styled.div`
width: 225px;
height: 42px;
background-color: #E8833A;
border-radius: 3px;
`