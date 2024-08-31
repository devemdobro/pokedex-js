import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext, themes } from "../../contexts/theme-context"
import ashhat from "../../assets/ashhat.png"
import rocket from "../../assets/rocket.png"

export const ThemeToggler = () => {
    const { setTheme } = useContext(ThemeContext)


    return (
        <div>

            <Div >
                <H1>Themes:</H1>
                <DivImg>
                    <Img src={rocket} alt="dark theme" onClick={() => setTheme(themes.dark)}></Img>
                </DivImg>
                <DivImg>
                    <Img src={ashhat} alt="light theme" onClick={() => setTheme(themes.light)}></Img>
                </DivImg>
            </Div>
        </div>
    )
}

const Div = styled.div`
display: flex;
flex-direction: wrap;
align-items: center;
justify-content: center;
@media (max-width: 768px){
    display: block;
    text-align: center;
  }
`
const Img = styled.img`
width: 100%; 
box-sizing:border-box;
&:hover{
    border: 1px solid red;
    border-radius: 5px;
    };
`
const DivImg = styled.div`
width:3%;
cursor:pointer;
margin-left: 2px;
@media (max-width: 768px){
    width:10%;
    margin: auto;
  }
`
const H1 = styled.h1`
color: #FFCB05;
padding: 1%;
@media (max-width: 768px){
    font-size: 20px;
  }
`