import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    // --- Enter y agregar a la lista
    const onSubmit = (evt) => {

        evt.preventDefault();

        let trimInputValue = inputValue.trim();

        if (trimInputValue.length > 1) {
            setInputValue('');
            onNewCategory(trimInputValue);
        } else {
            alert("La categoría debe de tener una longitud mínima de 2 caracteres.");
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}
