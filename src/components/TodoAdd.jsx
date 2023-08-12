//import React from 'react'
import { useForm } from '../hooks/useForm'
import PropTypes from 'prop-types'; // Importa PropTypes
import { BiEditAlt } from 'react-icons/bi';

export default function TodoAdd({ handleNewTodo }) {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onFormSubmit = e => {
        e.preventDefault()

        if (description.length <= 1) return
        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        handleNewTodo(newTodo)
        onResetForm()
    }
    return (
        <form action="" onSubmit={onFormSubmit} className='form-container'>
           <div className='input-wrapper'><BiEditAlt className='icon' />
                <input type="text"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    className='input-add'
                    placeholder={`Introduce tu tarea `}
                />
           </div>
                


            <button type="submit" className='btn-add'>Añadir tarea</button>
        </form>
    )
}

TodoAdd.propTypes = {
    handleNewTodo: PropTypes.func.isRequired
}
