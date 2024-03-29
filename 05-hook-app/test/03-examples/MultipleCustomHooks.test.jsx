import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();
     });

     test('debe de mostarr un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );
        expect( screen.getByText('Hola mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando')).toBeTruthy();


        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();

     });

     test('debe de llamar la funcion de incrementar', () => { 
       
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        });


        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });
 });