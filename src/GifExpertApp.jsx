import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Back to the Future']);

    // --- Validando las categorías
    const onAddCategory = (newCategory) => {

        let existeCategoria = false;

        categories.map(categoryArray => {
            const categoryOld = categoryArray.toLowerCase();
            if (newCategory.toLowerCase() == categoryOld) {
                existeCategoria = true;
            }
        });

        if (!existeCategoria) {
            setCategories([newCategory, ...categories]);
        } else {
            alert("La categoría ya existe en la lista.");
        }

    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={(newCategory) => onAddCategory(newCategory)} />
            <span className="title">Escriba algo para buscar</span>
            <br />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    );

}