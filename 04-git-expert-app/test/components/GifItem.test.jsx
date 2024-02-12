import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas en <GifItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () =>  {
        render( <GifItem title={title} url={url}/>);

        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title);

    });

    test('Debe mostrar el tituo del componente', () => {
        render( <GifItem title={title} url={url} />);
        expect( screen.getByText(title)).toBeTruthy();
    })
});