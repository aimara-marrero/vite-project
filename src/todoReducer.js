export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload] //return new array. Doesn't mutate the initialSatate

        case 'Delete Todo':

            return initialState.filter(todo => todo.id !== action.payload)
        case 'Update Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.description 
                    }
                }
                return todo
            })

        case 'Complete Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done  // Change the boolean value. 
                    }
                }
                return todo
            })


        default:
            return initialState
    }
}