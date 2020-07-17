function Sizing(props) {
    return (
        <div className='decals'>
            <i className={props.icon} aria-hidden='true'></i>
            <div className='decals-data'>{props.info} Habitaciones</div>
        </div>
    );
}
