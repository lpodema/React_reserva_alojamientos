function Mainview(props) {
    const { hoteles } = props;
    return (
        <div className='mainview'>
            <HotelContainer hoteles={hoteles} filterData={props.filterData} />
        </div>
    );
}
