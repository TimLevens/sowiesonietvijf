import styled from "styled-components";

export const LineFooter = styled.ul`
	font-family: "Proxima Nova";
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	line-height: 3em;
	list-style: none;
	margin: 0;
	padding: 0;
	text-decoration: none;
	font-size: 0.6em;
`;

export const Linelist = styled.li`
    background-color: ${props => props.Bcolor ? props.Bcolor : null };
	text-decoration: none;
    text-align: center;
    color: ${props => props.color ? props.color : null };
`;
