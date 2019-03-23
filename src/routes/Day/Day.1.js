import React from "react";
import { Nav } from "../../components/Nav/Nav";
import { data } from "../../data.js";
import { makeFakeData } from "./makeFakeData";
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = makeFakeData();

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kd8rssL/';

  render() {
    return (
		<Nav/>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    );
  }
}
