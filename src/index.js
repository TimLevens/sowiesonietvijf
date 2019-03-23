import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

// components
import Home from "./routes/Home/Home";
import Month from "./routes/Month/Month";
import Day from "./routes/Day/Day";
import Year from "./routes/Year/Year";

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/day" component={Day}/>
    <Route path="/month" component={Month}/>
    <Route path="/year" component={Year}/>
  </div>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
