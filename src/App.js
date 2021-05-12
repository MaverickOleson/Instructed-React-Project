import {useState, useEffect} from 'react'
//useState and useEffect imported
import {BrowserRouter as Router, Route} from 'react-router-dom'
//BrowserRouter, as Router, and Router imported
import Header from './components/Header'
//Header component imported
import Footer from './components/Footer'
//Footer component imported
import Tasks from './components/Tasks'
//Tasks component imported
import AddTask from './components/AddTask'
//AddTask component imported
import About from './components/About'
//About component imported

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  //variable of showAddTask, with a method of setShowAddTask, set as useState with a parameter of fals
  const [tasks, setTasks] = useState([])
  //tasks variable, with a method of setShowAddTask, set as an array with objects inside it
  
  var date = new Date()
  //variable date set as the new date
  date = date.toString().split(' ')
  //date is turned into a string, with toString(), and split by its spaces, with split(' ')
  date = `${date[1]} ${date[2]}, ${date[3]}`
  //date is equal to the three dates after the first date in the date array, with `${date[1]} ${date[2]}, ${date[3]}`

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  //useEffect function activated with a first parameter of a function, called getTasks, which, using the async and await keywords, creates a variable, called tasksFromServer, equal to the value returned by the fetchTasks function, which is used as the parameter of the setTasks function, followed by the getTasks function being activated. The useEffect function has an empty array as its second parameter

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
  //fetchTasks function, using the async and await keywords, is a function that creates two variables, with res being the fetched data from the tasks array, withing db.json, and data being equal to the res variable, parsed as a javascript object with the '.json()' object. This function also returns the data variable

//Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}
//fetchTask function, using the async and await keywords, is a function that creates two variables, with res being the tasks, identified by the clicked element's id, from the fetched data from the tasks array, withing db.json, and data being equal to the res variable, parsed as a javascript object with the '.json()' object. This function also returns the data variable
  
//Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  //res variable, using the await keyword, equal to the the fetched data from the tasks array, withing db.json, with method: 'POST', the 'Content-type', in headers, set to 'application/json', and the body set to, using JSON.stringify, a JSON string of the task being added

  const data = await res.json();
  //using the await keyword, data variable equal to the res variable, parsed as a javascript object with the '.json()' object

  setTasks([...tasks, data])
  //setTasks function activated with the tasks variable and the data variable
}
//addTask function uses the async keyword

//Delete Task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  //using the await keyword, the click element's id is used to access the db.json object, in the tasks array, that the id correlates to, and this object is deleted with method: 'DELETE'

  setTasks(tasks.filter((task) => task.id !== id))
  //filters the tasks variable, with tasks whose id is not equal to that of the task being clicked on
}
//deleteTask function uses the async keyword

//Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  //taskToToggle variable, using the await keyword, is equal to the returned value from the fetchTask function, using a paramerter of id
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  //updTask variable is equal to the taskToToggle, and the reminder, set as the opposite of taskToToggle.reminder, with the NOT operator

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  //res variable, using the await keyword, equal to the the fetched data from the tasks array, withing db.json, with method: 'PUT', the 'Content-type', in headers, set to 'application/json', and the body set to, using JSON.stringify, a JSON string of the updated task being added

  const data = await res.json()
  //using the await keyword, data variable equal to the res variable, parsed as a javascript object with the '.json()' object
  
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  //for each task in the tasks variable, if the task's id matches that of the task clicked (the same task), that task is set as itself, along with the data's reminder value, otherwise, if the task's id is different, it is set to itself
}
//toggleReminder function uses the async keyword

  return (
    <Router>
      <div className="container">
        <p style={{fontSize: 'large'}}>Maverick Oleson</p>
        {/* p with style{{fontSize}} set as large and the text set as 'Maverick Oleson' */}
        <Header date={date} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {/* Header component with date set as the date variable, onAdd set as a function that activates the setShowAddTask function with the parameter of the opposite of showAddTask, using the NOT function*/}
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {/* if showAddTask is true, the AddTask component with an onAdd of addTask will appear*/}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
            {/* if the tasks variable's length is greater than 0, the Tasks component, with tasks set as the tasks variable, onDelete set as the deleteTask function, and onToggle set as the toggleReminder, appears, otherwise the text 'No Tasks to Show' appears*/}
          </>
        )} />
        {/* Route component with path set as '/', exact set, and render set as a function, passing props as a parameter and containing two statements that generate elements or text */}
        <Route path='/about' component={About} />
        {/* Route component with path set as '/about and component set as the About component' */}
        <Footer />
        {/* Footer component */}
      </div>
    </Router>
  );
}

export default App;
