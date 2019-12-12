import React,{useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className="nav">
            <div className="site-title">
                <h1>Movie List</h1>
                <span>Incorporated limited</span>
            </div>
            
            <div className="site-catalog-state">
                <h6>Movies in catalog: </h6>
                <span>&nbsp;{movies.length}</span>
            </div>
        </div>
    );
};

export default Nav;