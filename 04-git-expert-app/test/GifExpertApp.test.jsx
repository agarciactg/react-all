import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 
    test('should', () => {
        render( <GifExpertApp /> );

        expect(screen.getByText('One Punch'));
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Goku' }});
        expect( input.value ).toBe('Goku');

        // screen.debug();
    });
});
