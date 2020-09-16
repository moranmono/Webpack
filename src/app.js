// import {sum} from './dependency'
// console.log('sum: ', sum(1,15));
//import to webpack
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

const root = document.querySelector('#root');
const Component = () => <div>Hello</div>
ReactDOM.render(<Component />, root);