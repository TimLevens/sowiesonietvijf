import React from "react";
import { Nav } from "../../components/Nav/Nav";
// import { data } from "../../data.js";
import { makeFakeData, makeDataValue } from "./makeFakeData";
import { BarChart, Bar, Cell, Pie, PieChart } from "recharts";
import {bunqcolors} from "../../components/bunqcolors";
const Day = () => {
	// const payments = data[0].payments;
	const payments = makeFakeData();
	const list2 = makeDataValue();
	console.log(makeFakeData());

	return (
		<div>
			<Nav currentlyActive="day" />

            <BarChart width={1000} height={500} data={payments}>
                <Bar dataKey="amount.value">
                    {payments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={bunqcolors[index % bunqcolors.length]}/>
                    ))}
                </Bar>
            </BarChart>
        
			<PieChart width={500} height={400}>
				<Pie
					data={list2}
					cx={120}
					cy={140}
					innerRadius={100}
					outerRadius={200}
					paddingAngle={0}
				>
					{list2.map((entry, index) => {
                        return (
                            <Cell fill={bunqcolors[index % bunqcolors.length]}/>
                        )
                    })}
				</Pie>
			</PieChart>
			<div />
		</div>
	);
};

export default Day;