import * as ActionTypes from './ActionTypes'

const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false },
    { activity: 'Second ToDo', complete: true },
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.CHANGEME:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }
    case ActionTypes.CHANGEME:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }
    case ActionTypes.CHANGEME:
      return { ...state, todo: state.todo.filter((task) => !task.complete) }
    case ActionTypes.CHANGEME:
      // TASK implement the final action type
      return {}
    default:
      return state
  }
}
