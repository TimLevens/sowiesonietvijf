import React from "react";
import { bunqcolors } from "./bunqcolors";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { LineFooter, Linelist } from "./LineStyle";
const color = bunqcolors[Math.floor(Math.random() * bunqcolors.length)];
const data = [
	{ name: "Jan", total: 950 },
	{ name: "Feb", total: 1120 },
	{ name: "Mar", total: 340 },
	{ name: "Apr", total: 750 },
	{ name: "May", total: 800 },
	{ name: "June", total: 960 },
	{ name: "July", total: 1300 },
	{ name: "Aug", total: 440 },
	{ name: "Sep", total: 740 },
	{ name: "Oct", total: 600 },
	{ name: "Nov", total: 1200 },
	{ name: "Dec", total: 920 }
];

const lineFooter = () =>
	data.map((item, index) => (
		<Linelist Bcolor={bunqcolors[index]} color="#fff" key={item.name}>
			{item.name}
		</Linelist>
	));

export const SimpleAreaChart = () => {
	return (
		<div>
			<ResponsiveContainer height={300}>
				<LineChart data={data}>
					<Tooltip active={true} cursor={{ stroke: "#000", strokeWidth: 2 }} />
					<Line
						strokeWidth={4}
						type="monotone"
						dataKey="total"
						stroke={color}
						dot={{ stroke: color, strokeWidth: 2 }}
					/>
				</LineChart>
			</ResponsiveContainer>
			<LineFooter>{lineFooter()}</LineFooter>
		</div>
	);
};
export default SimpleAreaChart();
