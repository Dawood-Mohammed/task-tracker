import Header from './components/Header';
import PropTypes from 'prop-types';
import Tasks from './components/Tasks';
import AddForm from './components/AddForm';
import {useState, useEffect} from 'react';

const App = () => {
    const[toggleAdd, setToggleAdd] = useState(false)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8080/tasks/all')
        const data = await res.json()
        return data
    }
    const deleteTask = async (id) => {
        await fetch(`http://localhost:8080/tasks/${id}`
                    ,{method: 'DELETE'})
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const toggleReminder = async (id) => {
        await fetch(`http://localhost:8080/tasks/${id}`
        ,{method: 'PUT'})
        const updatedTasks = await fetchTasks()
        console.log(updatedTasks)
        setTasks([updatedTasks])
        setTasks(
            tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
            )
    }
    const saveTask = async (task) => {
        const res = await fetch('http://localhost:8080/tasks'
                                ,{method: 'POST'
                                 ,headers: {'content-type' : 'application/json'}
                                 ,body: JSON.stringify(task)})
        const data = await res.json()
        setTasks([...tasks, data])
    }
    return(
        <div className='container'>
            <Header title='Task Tracker' toggleAdd = {() => setToggleAdd(!toggleAdd)} showAdd={toggleAdd}/>
            <AddForm saveTask={saveTask} display={!toggleAdd ? 'none' : 'block' }/>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: <h2>No Tasks To Show</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array
}

export default App;