import React from 'react'
import ReactDom from 'react-dom';
import './index.css'
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';



const divRoot = document.querySelector('#root');

// ReactDom.render(<PrimeraApp saludo="Hola soy Daniel"/>,divRoot);
ReactDom.render(<CounterApp value={5}/>,divRoot);

