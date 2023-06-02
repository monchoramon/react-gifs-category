import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba del componente <AddCategory />', () => {

    let inputValue = 'Back to the Future';

    test('Debe de cambiar el valor de la caja del texto (INPUT)', () => {

        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);

    });


    test('Evaluando el onSubmit', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        // --- Evaluando ejecución de función.
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);


    });
    
    test('No debe de llamar el onNewCategory si el input está vació', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });


});