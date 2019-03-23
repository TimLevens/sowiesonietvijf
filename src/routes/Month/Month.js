import React from "react";
import {Nav} from "../../components/Nav/Nav";
import {SimpleAreaChart} from '../../components/Line';
const Month = (props) => {
    return <div>
        <Nav currentlyActive="month"/>
        <SimpleAreaChart/>
    </div>
}

export default Month;