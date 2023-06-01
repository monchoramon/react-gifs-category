import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba del componente <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja del texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Back to the Future' } });
        expect(input.value).toBe('Back to the Future');
        
    });

});