function HotelContainer(props) {
    const { hoteles, filterData } = props;
    const filters = Object.entries(filterData);

    const hotelsFiltered = hotelsData.filter((element) => {
        return filters.every((filt) => {
            return checkCriterias(element, filt);
        });
    });

    const hotelsToShow = filters.every((filt) => filt[1] === null)
        ? hoteles
        : hotelsFiltered;

    console.log(hotelsFiltered);
    return (
        <div className='hotel-container'>
            {hotelsToShow.map((hotel) => {
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
