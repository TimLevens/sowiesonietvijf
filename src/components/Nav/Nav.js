import React from "react";
import { Link } from "react-router-dom";
import { MenuList, MenuItem } from "./Menu";

const navOptions = [
	{
		id: 1,
		to: "day",
		name: "day",
		content: "Day"
	},
	{
		id: 2,
		to: "month",
		name: "month",
		content: "Month"
	},
	{
		id: 3,
		to: "year",
		name: "year",
		content: "Year"
	}
];

export const Nav = props => {
	return (
		<MenuList>
			{navOptions.map(item => {
				return (
					<Link to={`/${item.to}`} key={item.id}>
						<MenuItem active={item.name === props.currentlyActive}>
							{item.content}
						</MenuItem>
					</Link>
				);
			})}
		</MenuList>
	);
};
