function Mainview(props) {
    const { hoteles } = props;
    // console.log("mainview", Date.now());
    return (
        <div className='mainview'>
            <HotelContainer hoteles={hoteles} filterData={props.filterData} />
        </div>
    );
}
