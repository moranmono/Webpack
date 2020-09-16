// import {sum} from './dependency'
// console.log('sum: ', sum(1,15));
//import to webpack
import React from 'react'
import ReactDOM from 'react-dom'
import { sum } from './dependency';

//the code
const root = document.querySelector('#root');
const Component = () => React.createElement('div', null, sum(1,3));
ReactDOM.render(React.createElement(Component), root);