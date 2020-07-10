function Mainview(props) {
    const { hoteles } = props;
    console.log(hoteles);
    return (
        <div className='mainview'>
            <HotelContainer hoteles={hoteles} />
        </div>
    );
}
