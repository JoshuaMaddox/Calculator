import AppDispatcher from '../AppDispatcher'


const ButtonAction = {
  press(btnPress) {
    AppDispatcher.dispatch({
      type: 'NEW_BTNPRESS',
      payload: { btnPress }
    })
  }
}

export default ButtonAction
