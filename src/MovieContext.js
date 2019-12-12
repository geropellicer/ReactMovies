import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            title: 'Harry Potter',
            price: 45,
            id: 68465,
            description: `Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.`,
            img: 'https://mundofunko.com/blog/wp-content/uploads/2019/05/isdktkqturbxy9kmmm4ymi4n2qzy2u0zji5nmizntu3mjk2ztg2zwy2my5qcgvnkzmcam0b5a.jpg'
        },
        {
            title: 'Lord of the Rings',
            price: 75,
            id: 987654,
            description: `Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.`,
            img: 'https://vignette.wikia.nocookie.net/lotr/images/8/87/Ringstrilogyposter.jpg/revision/latest?cb=20070806215413'
        },
        {
            title: 'Las crónicas de Narnia',
            price: 32,
            id: 458564,
            description: `Las Crónicas de Narnia es una serie de películas de fantasía de Walt Disney Pictures, Walden Media y también de 20th Century Fox basada en la serie de novelas homónima escrita por C.S. Lewis.`,
            img: 'https://ep01.epimg.net/cultura/imagenes/2018/10/03/television/1538578910_622637_1538579089_noticia_normal.jpg'
        },
        {
            title: 'Piratas del Caribe',
            price: 52,
            id: 122546,
            description: `Piratas del Caribe es el título de una serie cinematográfica de aventura fantástica y piratas, producida por Jerry Bruckheimer y basada en la atracción del mismo nombre del Parque Temático de Walt Disney. La saga Piratas del Caribe cuenta con 5 películas hasta ahora.`,
            img: 'https://www.cinepremiere.com.mx/wp-content/uploads/2019/02/Piratas-del-caribe.jpg'
        },
        {
            title: 'El Hobbit',
            price: 57,
            id: 964412,
            description: `Bilbo Bolsón lleva una vida sencilla con sus compañeros hobbits en la comarca, hasta que el mago Gandalf llega y lo convence de unirse a un grupo de enanos para recuperar el reino de Erebor. El viaje lleva a Bilbo en un camino a través de tierras peligrosas llenas de orcos, goblins y otras amenazas, además de su encuentro con Gollum y un sencillo anillo de oro que está unido al destino de la Tierra Media de una forma que Bilbo no puede imaginarse.`,
            img: 'https://i.blogs.es/e12400/el_hobbit_3d_hfr_2012_the_hobbit_an_unexpected_journey_poster/450_1000.jpg'
        },
        {
            title: 'La Brújula Dorada',
            price: 17,
            id: 897456,
            description: `Lyra Belacqua vive en un mundo paralelo en el que las almas humanas adoptan las formas de unos animales de compañía llamados daemons. Las fuerzas oscuras trabajan en el mundo de Lyra, y muchos niños han sido secuestrados por seres malditos conocidos como Gobblers. Cuando Roger, el mejor amigo de Lyra, desaparece, ella promete salvarlo. Acompañada por su daemon, una tribu de navegantes, una bruja, un oso polar y un piloto de Texas, Lyra realiza una búsqueda épica.`,
            img: 'https://i.ytimg.com/vi/m2umHRT8L2M/maxresdefault.jpg'
        },
    ])

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}