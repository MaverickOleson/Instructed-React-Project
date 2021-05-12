import {useState} from 'react'
//useState imported

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    //variable of text, with a method of setText, set as useState with a parameter of a blank string
    const [day, setDay] = useState('')
    //variable of day, with a method of setDay, set as useState with a parameter of a blank string
    const [reminder, setReminder] = useState(false)
    //variable of reminder, with a method of setReminder, set as useState with a parameter of false

    const onSubmit = (e) => {
        //function with parameter of e, for the clicked element
        e.preventDefault()
        //clicked element doesn't submit a page

        if(!text) {
            alert('Please add a task')
            return
        }
        //text is empty, an alert pops up and it returns

        onAdd({text, day, reminder})
        //onAdd functin activated with parameters of text, day, and reminder

        setText('')
        //setText a parameter of an empty string
        setDay('')
        //setDay a parameter of an empty string
        setReminder(false)
        //setReminder with a parameter of false
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                {/* label with the text of 'Task' */}
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
                {/* input with a type of 'text', a placeholder of 'Add Task', a value of text, and onChange set as a funtion, with the parameter e, that activates the setText function, using e.target.value as the parameter */}
            </div>
            {/* div with className of 'form-control' */}
            <div className='form-control'>
                <label>Day & Time</label>
                {/* label with the text of 'Day' */}
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
                {/* input with a type of 'text', a placeholder of 'Add Day & Time', a value of day, and onChange set as a funtion, with the parameter e, that activates the setDay function, using e.target.value as the parameter */}
            </div>
            {/* div with className of 'form-control' */}
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                {/* label with the text of 'Set Reminder' */}
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                {/* input with a type of 'checkbox', checked set to reminder, a value of reminder, and onChange set as a funtion, with the parameter e, that activates the setReminder function, using e.currentTarget.checked as the parameter */}
            </div>
            {/* div with className of 'form-control form-control-check' */}

            <input type='submit' value='Save Task' className='btn btn-block' />
            {/* input with a type of 'submit', a value of 'Save Task', and a className of 'btn btn-block' */}
        </form>
        // form with className of 'add-form' and onSubmit set as the onSubmit function
        
    )
}

export default AddTask
