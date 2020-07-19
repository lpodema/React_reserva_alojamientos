function HotelContainer(props) {
    const { hoteles, filterData } = props;
    const filters = Object.entries(filterData);

    function notMatchedPrice(val) {
        let result = "";
        for (let i = 1; i <= val; i++) {
            result += "$";
        }
        return result;
    }

    const hotelsFiltered = hotelsData.filter((element) => {
        return filters.every((filt) => {
            return checkCriterias(element, filt);
        });
    });

    const hotelsToShow = filters.every((filt) => filt[1] === null)
        ? hoteles
        : hotelsFiltered;

    return (
        <div className='hotel-container'>
            {hotelsToShow.length > 0 ? (
                hotelsToShow.map((hotel) => {
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
                })
            ) : (
                <div className='noHotels'>
                    <h1>No se encontraron hoteles disponibles.</h1>
                    <h3>
                        Por favor, pruebe con otros criterios o bien presione
                        'Restablecer Filtros'
                    </h3>
                    <div className='notMatched'>
                        {filterData.availabilityFrom ? (
                            <h3>
                                Fecha de Ingreso: {filterData.availabilityFrom}
                            </h3>
                        ) : null}
                        {filterData.availabilityTo ? (
                            <h3>
                                Fecha de Salida: {filterData.availabilityTo}
                            </h3>
                        ) : null}
                        {filterData.country ? (
                            <h3>País: {filterData.country.toUpperCase()}</h3>
                        ) : null}
                        {filterData.price ? (
                            <h3>Precio: {notMatchedPrice(filterData.price)}</h3>
                        ) : null}
                        {filterData.size ? (
                            <h3>
                                Tamaño de Hotel: {filterData.size.toUpperCase()}
                            </h3>
                        ) : null}
                    </div>
                    <button className='reset' onClick={props.resetFilters}>
                        Restablecer Filtros
                    </button>
                </div>
            )}
        </div>
    );
}
