import React,{useState, useContext} from 'react';
import { MovieContext } from './MovieContext';

const AddMovieForm = () => {

    const [movies, setMovies] = useContext(MovieContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');

    const updateTitle = e => {
        setTitle(e.target.value);
    };

    const updatePrice = e => {
        setPrice(e.target.value);
    };

    const updateId = e => {
        setId(e.target.value);
    };

    const updateImg = e => {
        setImg(e.target.value);
    };

    const updateDescription = e => {
        setDescription(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {
            title: title,
            price: parseInt(price),
            id: parseInt(id),
            description: description,
            img: img
        }]);

        setTitle('');
        setPrice('');
        setId('');
        setImg('');
        setDescription('');
    };


    return(
        <form onSubmit={addMovie}>
            <label htmlFor="title">Movie title</label>
            <input value={title} onChange={updateTitle} type="text" placeholder="Enter a great title..." name="title"/>
            
            <label htmlFor="image">Main image</label>
            <input value={img} onChange={updateImg} type="text" placeholder="url to a great image..." name="image"/>
            <img src={img}/>
            
            <label htmlFor="price">Price ($)</label>
            <input value={price} onChange={updatePrice} type="number" placeholder="99" name="price" />
            
            <label htmlFor="id">Unique ID</label>
            <input value={id} onChange={updateId} type="text" placeholder="######" name="id"/>
            
            <label htmlFor="description">description</label>
            <textarea value={description} onChange={updateDescription} name="description">

            </textarea>

            <button onClick={addMovie} type="submit">
                Add movie!
            </button>
        </form>
    );
};

export default AddMovieForm;