import React from 'react'
import './Task.css'
class Task extends React.Component {
    render() {
        const { title, dueDate, deleteTask } = this.props;
        return (
            <div className="task-default">
                <span className='task-text'> {title} by {dueDate}</span> <span className='delete-button' onClick={() => deleteTask()} >x</span>
            </div>
        )
    }
}
export default Task 