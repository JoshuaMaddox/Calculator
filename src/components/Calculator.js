import React, { Component } from 'react'
import CalculationStore from '../stores/CalculationStore'
import Buttons from '../components/Buttons'

export default class Calculator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonsPressed: CalculationStore.getBtnPresses(),
      heldValue: CalculationStore.getTotal()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount(){
    CalculationStore.startListening(this._onChange)
  }

  componentWillUnmount(){
    CalculationStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
       buttonsPressed: CalculationStore.getBtnPresses(),
       heldValue: CalculationStore.getTotal()
    })
  }

  render(){

    return(
      <div className="container">
        <div className="row">
          <div className="calculator-container">
            <div className="calculator-body">
              <div className="calculator-screen">
              {this.state.buttonsPressed}
              </div>
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    )
  }
}