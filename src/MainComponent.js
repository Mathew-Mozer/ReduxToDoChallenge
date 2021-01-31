import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          {/* Task: map through the list displaying the list item. don't forget the unique key*/}
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
              <button onClick={() => this.handleSubmit()}>Add To Redux</button>
              <button onClick={() => console.log('Replace with dispatched function for clearing values')}>
                Clear Complete
              </button>
              <button onClick={() => console.log('Replace with dispatched function for clearing the list')}>
                Clear List
              </button>
            </div>
          </div>
          <div>
            <br />
            Redux Challenge
            <br />
            <br />
            <div>
              <div>Add Tasks to list</div>
              <div>Status of task in Redux</div>
              <div>Ability to clear completed tasks</div>
              <div>Ability to remove all tasks</div>
              <div>Extra:</div>
              <div>Ability to remove single tasks</div>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

// Task: Connect this function to redux
export default Main
