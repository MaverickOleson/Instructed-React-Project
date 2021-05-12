import Task from './Task'
//Task component imported

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
            {/* Tasks created, with key set as tasks.id, task set as task, onDelete set as onDelete, and onToggle set as onToggle */}
        </>
    )
}

export default Tasks
