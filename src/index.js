import React, { Component } from 'react'
import { render } from 'react-dom'
import stylesheet from './css/stylesheet.css'
import Calculator from './components/Calculator'

render(
 <Calculator />,
 document.getElementById('root') 
)