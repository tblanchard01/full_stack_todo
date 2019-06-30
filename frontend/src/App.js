import React from 'react';
import Task from './components/task/Task'
import './App.css';
const fetch = require('node-fetch');
const name = "Tim's";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [], filteredTasks: [], searchTerm: "" }
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
  }
  componentDidMount() {
    fetch('http://localhost:8000/tasks')
      .then(response => response.json())
      .then(data => this.setState({ tasks: data }))
  }
  handleSearchTerm(e) {
    console.log(e.target.value)
    // let filteredData = [...this.state.tasks];
    let searchTerm = e.target.value.toLowerCase()
    this.setState(prevState => {
      let filteredData = prevState.tasks.filter(x => x.title.toLowerCase().includes(searchTerm))
      return { filteredTasks: filteredData, searchTerm: searchTerm }
    });
    console.log('filtered state', this.state)
  }
  render() {
    const { tasks } = this.state;
    return (
      <div className="App" >
        <h1> {name} Todo List</h1>
        <div className="outer-container">
          <input type="text" className="input" placeholder="Search..." onChange={this.handleSearchTerm} />
          {tasks.map((task, key) => {
            return <Task title={task.title} dueDate={task.dueDate} key={key} />
          })}
        </div>
      </div >
    );
  }
}
export default App;
