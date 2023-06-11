import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid/>', () => {

    const category = "Back to the Future";

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
            findImages: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(">" + category));
    });

    test('Deben de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: "123",
                title: 'Hola Mundo',
                url: 'https://localhost.com/img.png'
            },
            {
                id: "321",
                title: 'Mundo Hola',
                url: 'https://localhost.com/gmi.png'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
            findImages: true
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
        
    });

});