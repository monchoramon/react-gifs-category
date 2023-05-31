import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en el componente <GifItem />', () => {

    const title = 'Back To The Future GIF';
    const url = 'https://media2.giphy.com/media/xsF1FSDbjguis/giphy.gif?cid=505daff6au6re92h99hyrpdtttcdqausyji2at27n4ot9xmk&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('Debe de hacer match con el snapshot ', () => {

        const { container } = render(
            <GifItem
                title={title}
                url={url} />
        );

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el título en el componente', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    });

});