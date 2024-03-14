import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";

describe('Pruebas en <AppRouter />', () => { 
    test('debe de mostarr el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter intialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                     <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length).toBe(2);

    });

    test('debe de mostrar el componente de Marvel si esta Autenticado', () => {

        const contextValue = {
            logged: false,
            user: {
                id: 'ABC',
                name: 'Juan perez'
            }
        }

        render(
            <MemoryRouter intialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                     <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    });
 })