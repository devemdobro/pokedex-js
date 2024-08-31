import styled from 'styled-components'

export const Button = (props) => {



    return (
      <div>
        <ButtonDiv {...props} ></ButtonDiv>
        </div>
    )
}

const ButtonDiv = styled.div`
align-text: center;
background-color: #d2ded4;
width: 10%;
font-size: 20px;
margin:auto;
padding: 10px;
text-align: center;
color: #7E281B;
font-weight : 700;
border: 3px solid #7AACBF;
border-radius: 50px;
transition: all 500ms ease;
margin-bottom: 1%;
margin-top: 1%;
&:hover{
  cursor: pointer;
  color: #d2ded4;
  background-color: #73281b;
}
&:active{
  color: #d2ded4;
  background-color: #73281b;
}
@media (max-width: 768px){
  width: 45%;
}
`