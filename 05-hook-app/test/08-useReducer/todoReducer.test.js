import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => { 

    const initianState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer( initianState, {});
        expect( newState ).toBe(initianState);
    });

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                 id, 2,
                 description: 'Nuevo todo #2',
                 done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('debe de eliminar ', () => {

        const action = {
            type: '[TODO] Remove todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe(0);         

    });
    
    test('debe de realizar el Toggle del todo', () => {

        const action = {
            type: '[TODO] Remove todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length[0].done ).toBe( true );
        
        const newState2 = todoReducer( initialState, action );
        expect( newState2.length[0].done ).toBe( false );
    });
 });