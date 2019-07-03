import React from 'react'
import './Task.css'
class Task extends React.Component {
    render() {
        const { title, dueDate } = this.props;
        return (
            <div className="task-default">
                <span className='task-text'> {title} by {dueDate}</span> <span className='delete-button'>x</span>
            </div>
        )
    }
}
export default Task 