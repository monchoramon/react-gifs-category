import PropTypes from "prop-types";
import { GifItem } from '../components/GifItem';
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading, findImages } = useFetchGifs(category);

    return (
        <>
            <hr />
            <h3>Categoría:</h3>
            <h4 className='categoryName'>{">" + category}</h4>
            <br />
            {
                isLoading && <b>Cargando...</b>
            }
            <div className="card-grid">
                {
                    images.map((image, index) =>
                    (
                        <GifItem
                            key={image.id}
                            index={index}
                            {...image} />
                    ))
                }
                {
                    !findImages &&
                    <h4 className='alert-warning'>
                        <p>
                            <b>¡No hay imágenes para mostrar!</b>
                        </p>
                    </h4>
                }
            </div>
        </>
    )

}

GifGrid.prototypes = {
    category: PropTypes.string.isRequired
}
