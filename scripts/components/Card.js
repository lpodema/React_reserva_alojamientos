function Card(props) {
    const { name, photo, description, rooms, city, country, price } = props;
    return (
        <div className='card'>
            <img src={photo}></img>
            <div className='title-desc'>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className='info-container'>
                    <p>{`${city}, ${country}`}</p>
                    <p>{rooms}</p>
                    <p>{price}</p>
                </div>
            </div>
            <button className='btn-book'>Reservar</button>
        </div>
    );
}
