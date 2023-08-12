import {useRef, useState} from 'react';
import {BsPencilSquare} from 'react-icons/bs'
import { useForm } from '../hooks/useForm'
import PropTypes from 'prop-types'; // Importa PropTypes


export default function TodoUpdate({todo,handleUpdateTodo}) {
  const {updateDescription, onInputChange} = useForm({
    updateDescription: todo.description,
  })

  const[disable,setDisable] = useState(true)
  const focusInputRef = useRef()

  const onSubmitUpdate = e =>{
    e.preventDefault()

    const id = todo.id
    const description = updateDescription
    handleUpdateTodo(id, description)
    setDisable(!disable)
    focusInputRef.current.focus()
  }
  return (
    <form action="" onSubmit={onSubmitUpdate}>
    <input type="text"
        name="updateDescription" 
        value={updateDescription} 
        onChange={onInputChange}
        className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
        placeholder='Introduce tu tarea'
        readOnly={disable}
        ref={focusInputRef}
    />
    <button type="submit" className='btn-edit'><BsPencilSquare /></button>
</form>
  )
}

TodoUpdate.propTypes = {
  handleUpdateTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
}