import React from 'react';
import Task from './components/task/Task'
import './App.css';
const fetch = require('node-fetch');
const name = "Tim's";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      filteredTasks: [],
      searchTerm: "",
      newNoteTitle: "",
      newNoteDate: ""
    }
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.handleNewTaskTitle = this.handleNewTaskTitle.bind(this);
    this.handleNewTaskDate = this.handleNewTaskDate.bind(this);
    this.handleNewTaskAdd = this.handleNewTaskAdd.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:8000/tasks')
      .then(response => response.json())
      .then(data => this.setState({ tasks: data, filteredTasks: data }))
  }
  handleSearchTerm(e) {
    let searchTerm = e.target.value.toLowerCase()
    this.setState(prevState => {
      if (searchTerm) {
        let filteredData = prevState.filteredTasks.filter(x => x.title.toLowerCase().includes(searchTerm))
        return { filteredTasks: filteredData, searchTerm: searchTerm }
      } else {
        return { filteredTasks: prevState.filteredTasks, searchTerm: searchTerm }
      }
    });
  }
  handleNewTaskTitle(e) {
    let newNoteTitle = e.target.value
    this.setState(prevState => {
      if (newNoteTitle) {
        return { newNoteTitle: newNoteTitle }
      }
    });
  }
  handleNewTaskDate(e) {
    let newNoteDate = e.target.value
    this.setState(prevState => {
      if (newNoteDate) {
        return { newNoteDate: newNoteDate }
      }
    });
  }
  handleNewTaskAdd() {
    this.setState(prevState => {
      if (prevState.newNoteTitle && prevState.newNoteDate) {
        return {
          filteredTasks: [...prevState.filteredTasks, { title: prevState.newNoteTitle, dueDate: prevState.newNoteDate }]
        }
      }
    })
  }
  handleDeleteTask(index) {
    this.setState(prevState => {
      let filteredData = prevState.filteredTasks.filter((x, i) => i !== index)
      return { filteredTasks: filteredData }
    })
  }
  ///THREE THINGS WHEN ADDING NEW NOTE - clear fields - reset state 
  render() {
    const { filteredTasks } = this.state;
    return (
      <div className="App" >
        <h1> {name} Todo List</h1>
        <div className="outer-container">
          <input type="text" className="input" placeholder="Search..." onChange={this.handleSearchTerm} />
          {filteredTasks.map((task, index) => {
            return <Task title={task.title} dueDate={task.dueDate} key={index} deleteTask={() => this.handleDeleteTask(index)} />
          })}
          <input type="text" className="input" placeholder="Note Title..." onChange={this.handleNewTaskTitle} />
          <input type="text" className="input" placeholder="Due Date..." onChange={this.handleNewTaskDate} />
          <button disabled={!this.state.newNoteTitle || !this.state.newNoteDate} className="new-task-button" onClick={this.handleNewTaskAdd}>add new task</button>
        </div>
      </div >
    );
  }
}
export default App;
