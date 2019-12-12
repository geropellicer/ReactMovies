import React,{useContext} from 'react';
import Movie from './Movies';
import {MovieContext} from './MovieContext';

const MoviesList = () => {

    const [movies,setMovies] = useContext(MovieContext);

    return(
        <div className="movie-list">
            {
                movies.map((movie) => (
                    <Movie 
                        key={movie.id}
                        title={movie.title}
                        id={movie.id}
                        price={movie.price}
                        description={movie.description}
                        img={movie.img}
                    />
                )
                )
            }
        </div>
    );
};

export default MoviesList;