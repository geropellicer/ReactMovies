import React from 'react';

const Movie = ({title, img, id, price, description}) => {
    return(
        <div className="movie">
            <img src={img} alt={title}/>
            <div className="movie-data">
                <h1>{title}</h1>
                <div className="movie-row">
                    <span>Price:&nbsp;</span><h2>${price}</h2>
                    <span>ID:&nbsp;</span><h3>{id}</h3>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Movie;