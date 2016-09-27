import React, { Component } from 'react'
import ButtonAction from '../actions/ButtonAction'
import SoundEffectManager from 'sound-effect-manager'

let sm = new SoundEffectManager();
sm.loadFile('../sounds/click.mp3', 'click');

export default class Buttons extends Component {

  
  buttonPressed(e) {
    e.preventDefault()
    sm.play('click')
    let btnPress = e.target.id
    if(parseFloat(btnPress)){
      parseFloat(btnPress)
    } 
    ButtonAction.press(btnPress)
  }

  render(){

    return(
      <div className="buttonsContainer">
        <div className="row buttonsRow">
          <span onClick={this.buttonPressed} id='7' className="calculator-button">7</span>
          <span onClick={this.buttonPressed} id='8' className="calculator-button">8</span>
          <span onClick={this.buttonPressed} id='9' className="calculator-button">9</span>
          <span onClick={this.buttonPressed} id='/' className="calculator-button">÷</span>
        </div>
         <div className="row buttonsRow">
          <span onClick={this.buttonPressed} id='4' className="calculator-button">4</span>
          <span onClick={this.buttonPressed} id='5' className="calculator-button">5</span>
          <span onClick={this.buttonPressed} id='6' className="calculator-button">6</span>
          <span onClick={this.buttonPressed} id='*' className="calculator-button">x</span>
        </div>
         <div className="row buttonsRow">
          <span onClick={this.buttonPressed} id='1' className="calculator-button">1</span>
          <span onClick={this.buttonPressed} id='2' className="calculator-button">2</span>
          <span onClick={this.buttonPressed} id='3' className="calculator-button">3</span>
          <span onClick={this.buttonPressed} id='+' className="calculator-button">+</span>
        </div>
         <div className="row buttonsRow">
          <span onClick={this.buttonPressed} id='0' className="calculator-button">0</span>
          <span onClick={this.buttonPressed} id='.' className="calculator-button">.</span>
          <span onClick={this.buttonPressed} id='eval' className="calculator-button">=</span>
          <span onClick={this.buttonPressed} id='-' className="calculator-button">-</span>
        </div>
        <div className="row buttonsRow">
          <span onClick={this.buttonPressed} className="calculator-button" id="clear" >C</span>
        </div>
      </div>
    )
  }
}