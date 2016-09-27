import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events'


let currentEntry = ''
let _previousEntry = ''
let _operator = ''
let _heldValue = 0

class CalculationStore extends EventEmitter {

  constructor() {
    super()
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'NEW_BTNPRESS':
        let { btnPress } = action.payload
        this._addPress(btnPress)
        this.emit('CHANGE')
        break;
      }
    })
  }
  //Delete to here

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  _addPress(btnPress){
    if(btnPress === 'clear'){
      currentEntry = ''
    } else if(btnPress === 'eval') {
      let tempEntry = currentEntry
      currentEntry = eval(tempEntry)
    } else {
      currentEntry += btnPress
    } 
  }

  getBtnPresses() {
    return currentEntry
  }

  getTotal() {
    return _heldValue
  }

}

export default new CalculationStore

