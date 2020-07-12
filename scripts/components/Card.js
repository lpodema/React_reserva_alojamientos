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
