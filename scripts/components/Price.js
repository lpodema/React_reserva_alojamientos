function Price(props) {
    return (
        <div className='decals-price'>
            <div className='icon'>${props.icon}</div>
            <div className='icon-data'>{props.info}</div>
        </div>
    );
}
