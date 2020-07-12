/*
filtros:
fechas, paises, precio, tamaño

fechas: entrada y salida al hotel. Tiene que actualizarse la información en el componente header

dropdown de paises, lista de lugares a filtrar. Todos los países, Argentina, Brasil, Chile, Uruguay.

precios: Cualquier precio, $, $$, $$$, $$$$

tamaño: cualquier tamaño, pequeño (hasta 10 camas), mediano(hasta 20 inclusive), 
grande(más de 20)


FILTROS DEBEN TRABAJAR EN CONJUNTO.*/

function Filter(props) {
    const today = new Date();
    return (
        <div className='filter'>
            <form>
                <label>
                    Fecha Inicio
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityFrom'
                    />
                </label>
                <label>
                    Fecha Fin
                    <input
                        type='date'
                        onChange={props.handlerChanges}
                        name='availabilityTo'
                    />
                </label>

                <select onChange={props.handlerChanges} name='country'>
                    <option value={0}>Todos los Países</option>
                    <option value='Argentina'>Argentina</option>
                    <option value='Brasil'>Brasil</option>
                    <option value='Chile'>Chile</option>
                    <option value='Uruguay'>Uruguay</option>
                </select>

                <select onChange={props.handlerChanges} name='price'>
                    <option value={0}>Cualquier Precio</option>
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
