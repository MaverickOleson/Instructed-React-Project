import {FaTimes} from 'react-icons/fa'
//FaTimes component imported as a react icon

const task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} /></h3>
            {/* h3 created, with text set as task.text and the FaTimes component, which is styled as having the color red and a pointer cursor, and having an onClick of a function that activates the onDelete function with a parameter of task.id */}
            <p>{task.day}</p>
            {/* p created, with text set as task.day */}
        </div>
        //div with a className of 'task' and whatever task.reminder is set to, and the onDoubleClick is set as a function that activates the onToggle function, with a parameter of task.id
    )
}

export default task
