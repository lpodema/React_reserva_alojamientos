function Mainview(props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const { hoteles } = props;
    return (
        <div className='mainview'>
            <HotelContainer hoteles={hoteles} filterData={props.filterData} />
            <button onClick={scrollToTop} className='toTheTop'>
                <i className='fa fa-chevron-up' aria-hidden='true'></i>
            </button>
        </div>
    );
}
