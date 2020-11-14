const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false },
    { activity: 'Second ToDo', complete: true },
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Add the cases to match with the code
    case '':
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }
    case '':
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }
    case '':
      return { ...state, todo: state.todo.map((task) => ({ ...task, complete: false })) }
    case '':
      // TASK implement the final action type
      return {}
    default:
      return state
  }
}
