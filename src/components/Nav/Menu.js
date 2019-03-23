import styled from "styled-components";

export const MenuList = styled.ul`
	font-family: "Proxima Nova";
	background-color: black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    line-height: 3em;
	list-style: none;
	margin: 0;
    padding: 0;
    a{
        text-decoration: none;
        color: white;   
        font-size: 1.5em; 
    }
`;

export const MenuItem = styled.li`
    background-color: ${props => (props.active ? "#2e2e2e" : "#000")};
    text-decoration: none;
    text-align: center;
`;
