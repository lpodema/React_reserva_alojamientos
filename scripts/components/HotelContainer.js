// tamaño: cualquier tamaño, pequeño (hasta 10 camas), mediano(hasta 20 inclusive),
// grande(más de 20)

function HotelContainer(props) {
    // console.log("hotel container", Date.now());
    const { hoteles, filterData } = props;
    const filters = Object.entries(filterData);
    console.log(filters);

    function filterByCriteria(element, filt) {
        if (filt && filt !== "0") {
            return Object.values(element).includes(filt);
        } else {
            return true;
        }
    }

    function filterBySize(size, filter) {
        if (size) {
            return true;
        } else {
            return size > filter;
        }
    }
    function checkCriterias(element, filter) {
        const val = filter[1];
        const key = filter[0];
        // console.log(key, val);
        switch (key) {
            case "price":
                return filterByCriteria(element, parseInt(val));
                break;
            case "country":
                return filterByCriteria(element, val);
                break;
            case "size":
                return filterBySize(element.rooms, val);
                break;
            case "availabilityFrom":
                return checkDates(element.availabilityFrom, val);
                break;
            case "availabilityTo":
                return checkDates(element.availabilityTo, val);
                break;
            default:
                return true;
                break;
        }
    }

    function checkDates(availability, val) {
        if (val) {
            return availability > val;
        } else {
            return true;
        }
    }

    const hotelsFiltered = hotelsData.filter((element) => {
        //console.log(element);
        return filters.every((filt) => {
            //console.log(filt);
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

/*Funciona...

    function filterByCriteria(element, filt) {
      if(filt===null){
        return true
      }else{
        const vals = Object.values(element);
      //console.log(vals);
 //     console.log(filt)
        return vals.includes(filt);
    }
      }

function filterBySize(element, filter){
  const size = element.size;
  if(size>=filter){
    return true;
  }else{
    return false;
  }
}

function checkCriterias(element, filter){
  const val = filter[1]
  const key = filter[0]
  //console.log("247", value, key)
  switch(key){
    case 'price':
         return filterByCriteria(element, val)
      break;
    case 'country':
      return filterByCriteria(element, val)
      break;
    case 'size':
      console.log(key, val)
      return element.rooms>=val;
      break;
    default:
      return true;
      break;
  }
  
}

hotelsData.filter(element=> 
  //console.log(element)
  filters.every(filt =>{
  //  console.log(filt);
                 //console.log(element,"filtro" + filt);
       // console.log(filt);
        return checkCriterias(element,filt);
  
}
)
                  )
*/
