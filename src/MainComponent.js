import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, clearAllTasks, toggleToDo } from './redux/ActionCreators'
// Task:  Import functions from ActionCreators

// Task: Assign reducer to prop
const mapStateToProps = (state) => {
  return {}
}

// Task: add functions to dispatch
const mapDispatchToProps = {}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
    }
  }

  handleSubmit() {
    if (this.state.todoInput.length > 0) {
      // Task: add a new line to dispatch the state value to the action creator

      //This line doesn't change
      this.setState({ todoInput: '' })
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Redux To Do List</h1>
        <ul>
          {/* Task: create a map that displays the list item. don't forget the unique key. we will be using the index of the array*/}
          <li key={'unique key'}>
            <input
              type='checkbox'
              // Task: replace true with the property used to show completion
              checked={true}
              // Task: dispatch toggle instead of console.log. Use the index of the array
              onChange={() => console.log('Toggling')}
            />
            {/* Task: Replace this with task activity */}
            {' Item'}
          </li>

          <div className='AddField'>
            <input
              type='text'
              onChange={(e) => this.setState({ todoInput: e.target.value })}
              value={this.state.todoInput}
            />
            <div>
              <button onClick={() => this.handleSubmit()}>Add Task</button>
              <button onClick={() => alert('Replace with dispatched function for clearing values')}>
                Remove Completed
              </button>
              <button onClick={() => alert('Replace with dispatched function for clearing the list')}>
                Empty List
              </button>
            </div>
          </div>
          <div>
            <br />
            Redux Challenge
            <br />
            <br />
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <ol>
                <div style={{ margin: 10 }}>
                  This website is broken. We are missing some functionality and need your help fixing it.
                </div>
                <li>Tasks do not render on the page. There should be 2 when the page loads.</li>
                <li>Can't add tasks.</li>
                <li>The tasks do not toggle when clicked. This should be dispatched into redux.</li>
                <li>Completed tasks do not remove.</li>
                <li>All tasks do not remove.</li>
                <div>Extra:</div>
                <li>Ability to remove single tasks.</li>
              </ol>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

// Task: Connect this function to redux
export default connect(mapStateToProps, mapDispatchToProps)(Main)
