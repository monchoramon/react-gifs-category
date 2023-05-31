import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string
}

GifItem.defaultProps = {
    title: "Back To The Future GIF",
    url: "https://media2.giphy.com/media/xsF1FSDbjguis/giphy.gif?cid=505daff6au6re92h99hyrpdtttcdqausyji2at27n4ot9xmk&ep=v1_gifs_search&rid=giphy.gif&ct=g",
}