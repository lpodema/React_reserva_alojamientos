/*contiene el hotel
nombre, descripcion, ubicacion, cantidad de habitaciones y precio


cada index del array representa un hotel.
Todas las operacione de filtro que se hagan se van a buscar en el array

*/

function Card(props) {
    const { name, photo, description, rooms, city, country, price } = props;
    return (
        <div className='card'>
            <img src={photo}></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{`${city}, ${country}`}</p>
            <p>{rooms}</p>
            <p>{price}</p>
        </div>
    );
}
