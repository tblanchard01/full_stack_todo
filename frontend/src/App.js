import React from 'react';
import Task from './components/task/Task'
import './App.css';
const fetch = require('node-fetch');
const name = "Tim's";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [] }
  }
  componentDidMount() {
    fetch('http://localhost:8000/tasks')
      .then(response => response.json())
      .then(data => this.setState({ tasks: data }))
  }
  render() {
    const { tasks } = this.state
    console.log('this is the state', tasks)
    return (
      <div className="App" >
        <h1> {name} Todo List git test</h1>
        <div className="outer-container">
          hello
          {console.log('this is state from render method', this.state.tasks)}
          {tasks.map((task, key) => {
            return <Task title={task.title} dueDate={task.dueDate} key={key} />
          })}

        </div>
      </div >
    );
  }
}
export default App;
