// tamaño: cualquier tamaño, pequeño (hasta 10 camas), mediano(hasta 20 inclusive),
// grande(más de 20)

function HotelContainer(props) {
    const { hoteles, filterData } = props;
    const filters = Object.entries(filterData);

    function checkCriterias(element, filter) {
        const val = filter[1];
        const key = filter[0];
        //console.log(key, val);
        switch (key) {
            case "price":
                return filterByCriteria(element, parseInt(val));
            case "country":
                return filterByCriteria(element, val);
            case "size":
                return filterBySize(element.rooms, val);
            case "availabilityFrom":
                return checkDates(element.availabilityFrom, Date.parse(val));
            case "availabilityTo":
                return checkDates(element.availabilityTo, Date.parse(val));
            default:
                return true;
        }
    }

    function filterByCriteria(element, filt) {
        if (filt && filt !== "0") {
            return Object.values(element).includes(filt);
        } else {
            return true;
        }
    }

    function filterBySize(size, filter) {
        switch (filter) {
            case "pequeño":
                return size > 0 && size <= 10;
            case "mediano":
                return size > 10 && size <= 20;
            case "grande":
                return size > 20;
            default:
                return true;
        }
    }

    function checkDates(availability, val) {
        //console.log(val);
        if (val) {
            return availability > val;
        } else {
            return true;
        }
    }

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
