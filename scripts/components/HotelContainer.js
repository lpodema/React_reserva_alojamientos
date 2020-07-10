function HotelContainer(props) {
    const { hoteles } = props;
    console.log(hoteles);
    return (
        <div className='hotel-container'>
            {this.props.hoteles.map((hotel) => {
                return (
                    <Card
                        key={hotel.slug}
                        name={hotel.name}
                        photo={hotel.photo}
                        description={hotel.description}
                        rooms={hotel.rooms}
                        city={hotel.city}
                        country={hotel.country}
                        price={hotel.price}
                    />
                );
            })}
        </div>
    );
}

/*

*/
