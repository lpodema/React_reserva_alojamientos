function Filter(props) {
    return (
        <div className='filter'>
            <form>
                <div>
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityFrom'
                        value={props.dateFrom}
                    />
                </div>
                <div>
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityTo'
                        value={props.dateTo}
                    />
                </div>

                <select
                    onChange={props.handlerChanges}
                    name='country'
                    className='select-css'>
                    <option value='any'>Todos los países</option>
                    <option value='Argentina'>Argentina</option>
                    <option value='Brasil'>Brasil</option>
                    <option value='Chile'>Chile</option>
                    <option value='Uruguay'>Uruguay</option>
                </select>

                <select
                    onChange={props.handlerChanges}
                    name='price'
                    className='select-css'>
                    <option value={"any"}>Cualquier precio</option>
                    <option value={1}>$</option>
                    <option value={2}>$$</option>
                    <option value={3}>$$$</option>
                    <option value={4}>$$$$</option>
                </select>
                <select
                    onChange={props.handlerChanges}
                    name='size'
                    className='select-css'>
                    <option value='any'>Cualquier tamaño</option>
                    <option value='pequeño'>Pequeño</option>
                    <option value='mediano'>Mediano</option>
                    <option value='grande'>Grande</option>
                </select>
            </form>
        </div>
    );
}
