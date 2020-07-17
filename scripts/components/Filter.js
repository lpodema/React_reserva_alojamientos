function Filter(props) {
    return (
        <div className='filter'>
            <form>
                <div className='input-wrapper'>
                    <i className='fas fa-sign-in-alt'></i>
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityFrom'
                        value={props.dateFrom}
                        className='input-icons'
                    />
                </div>
                <div className='input-wrapper'>
                    <i className='fas fa-sign-out-alt'></i>
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityTo'
                        value={props.dateTo}
                        className='input-icons'
                    />
                </div>
                <div className='input-wrapper'>
                    <i className='fas fa-globe tag'></i>
                    <select
                        onChange={props.handlerChanges}
                        name='country'
                        className='input-icons'>
                        <option value='any'>Todos los países</option>
                        {countries.map((country) => (
                            <option value={country} key={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='input-wrapper'>
                    <i className='fa fa-usd' aria-hidden='true'></i>
                    <select
                        onChange={props.handlerChanges}
                        name='price'
                        className='input-icons'>
                        <option value='any'>Cualquier precio</option>
                        {prices.map((price) => (
                            <option value={price.length} key={price + length}>
                                {price}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='input-wrapper'>
                    <i className='fa fa-bed' aria-hidden='true'></i>
                    <select
                        onChange={props.handlerChanges}
                        name='size'
                        className='input-icons'>
                        <option value='any'>Cualquier tamaño</option>
                        {sizes.map((size) => (
                            <option value={size} key={size}>
                                Hotel {size}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
}
