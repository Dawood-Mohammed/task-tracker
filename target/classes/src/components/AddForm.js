import {useState} from 'react'

const AddForm = ( {saveTask, display }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('please add a task')
            return
        }
        saveTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder('')
    }
  return (
    <form className='add-form' style={{display: display}} onSubmit={(e) => onSubmit(e)}>
        <div className='form-control'>
            <label>Add Test</label>
            <input type='text' placeholder='add a text' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='add a day'value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set A Reminder</label>
            <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' className='btn btn-block' value='Submit Task'/>
    </form>
  )
}

export default AddForm
