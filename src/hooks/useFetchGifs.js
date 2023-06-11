import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [findImages, setFindImages] = useState(false);

    const getImages = async () => {
        let newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
        if (newImages.length > 0) {
            setFindImages(true);
        }
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
        findImages
    }

}