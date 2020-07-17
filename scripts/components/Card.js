function Card(props) {
    const { name, photo, description, rooms, city, country, price } = props;
    return (
        <div className='card'>
            <img src={photo}></img>
            <div className='title-desc'>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className='decals-container'>
                    <Location
                        icon='fas fa-map-marker'
                        info={`${city}, ${country}`}
                        country={country}
                    />
                    <Sizing icon='fa fa-bed' aria-hidden='true' info={rooms} />
                    <Pricing icon='fa fa-usd' aria-hidden='true' info={price} />
                </div>
            </div>
            <button className='btn-book'>Reservar</button>
        </div>
    );
}
