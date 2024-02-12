import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");


describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {
        // screen.debug();

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category ));
    });

    test('Debe de mostrar Items cuando se Cargan las imagenes desde useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://example.com/goku.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://example.com/vegeta.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        
        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
})