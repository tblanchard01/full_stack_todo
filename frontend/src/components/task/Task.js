import React from 'react'
import './Task.css'
class Task extends React.Component {
    render() {
        const { title, dueDate } = this.props;
        return (
            <div className="task-default">
                {title} by {dueDate}
            </div>
        )
    }
}
export default Task 