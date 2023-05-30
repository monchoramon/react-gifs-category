export const getGifs = async (category) => {

    const apiKey = 'Dzy5GV5bDMDd7OIPR61RT8MD1pdll1hb';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
    
}