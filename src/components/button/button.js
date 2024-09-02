import React from "react";
import styled from "styled-components";

const Button = (props) => {
    return (
        <Btn {...props}>{props.label}</Btn>
        );
}

Button.defaultProps = {
    label: "Button"
}

const Btn = styled.button`
    padding: 10px;
    margin: 5px;
`

export default Button;