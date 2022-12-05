import styled from "styled-components";

export default function Header(){
    return (
        <StyledHeader>
            <p>CINEFLIX</p>
        </StyledHeader>
    )
}



const StyledHeader = styled.div`
height: 67px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 34px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
color: #E8833A;
background-color: #C3CFD9;

`