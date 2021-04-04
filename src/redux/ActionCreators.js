import * as ActionTypes from './ActionTypes'

export const addTodo = (todo) => (dispatch) => {
  const newTodo = {
    activity: todo,
    complete: false,
  }
  dispatch(createTask('What should go here?'))
}

const createTask = (todo) => ({
  // Task: Change this object to a redux action.
})

export const toggleToDo = (id) => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: id,
})

export const clearAllTasks = () => ({
  type: ActionTypes.CLEAR_TASKS,
})

export const deleteAllTasks = () => ({
  // Task: Create an object to dispatch. use an object in this file as an example
})
