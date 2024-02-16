

const initialState = [{
    id: 1,
    todo: 'vivir',
    donde: true
}]

const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] a todo' ) {
        return [ ...state, action.payload ]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'vivir al maximo',
    donde: false
}

const addTodoAction = {
    type: '',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({state: todos})
