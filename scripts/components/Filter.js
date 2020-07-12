function Filter(props) {
    return (
        <div className='filter'>
            <form>
                <label>
                    Fecha Inicio
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityFrom'
                        value={props.dateFrom}
                    />
                </label>
                <label>
                    Fecha Fin
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityTo'
                        value={props.dateTo}
                    />
                </label>

                <select onChange={props.handlerChanges} name='country'>
                    <option value='any'>Todos los Países</option>
                    <option value='Argentina'>Argentina</option>
                    <option value='Brasil'>Brasil</option>
                    <option value='Chile'>Chile</option>
                    <option value='Uruguay'>Uruguay</option>
                </select>

                <select onChange={props.handlerChanges} name='price'>
                    <option value={"any"}>Cualquier Precio</option>
                    <option value={1}>$</option>
                    <option value={2}>$$</option>
                    <option value={3}>$$$</option>
                    <option value={4}>$$$$</option>
                </select>
                <select onChange={props.handlerChanges} name='size'>
                    <option value='any'>Cualquier tamaño</option>
                    <option value='pequeño'>Pequeño</option>
                    <option value='mediano'>Mediano</option>
                    <option value='grande'>Grande</option>
                </select>
            </form>
        </div>
    );
}
