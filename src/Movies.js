import React from 'react';

const Movie = ({title, img, id, price, description}) => {
    return(
        <div className="movie">
            <img src={img} alt={title}/>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h3>{id}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Movie;