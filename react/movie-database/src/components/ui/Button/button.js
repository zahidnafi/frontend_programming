import styled, {css} from "styled-components";

const colors = {
    primary: "#4361ee",
    secondary: "#b5179e",
};

const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: #fff;
background-color: #ff0000 ;
cursor: pointer;

background-color: ${function (props) {
    if (props.variant === "primary") {
        return colors[props.variant];
    } else {
        return "#ff0000";
    }

}};

${function(props) { 
    return(
    props.full && css`
    display: block;
    width: 78%;
    `
    );
}}
`;

export default Button;