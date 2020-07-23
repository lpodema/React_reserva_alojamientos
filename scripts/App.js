class App extends React.Component {
    state = {
        hoteles: null,
        isLoading: true,
        filterData: {
            availabilityFrom: null,
            availabilityTo: null,
            country: null,
            price: 0,
            size: null,
        },
    };

    componentDidMount() {
        this.setState({
            hoteles: hotelsData,
            isLoading: false,
            // filterData: {
            //     availabilityFrom: dateLiteral(),
            //     availabilityTo: dateLiteral(),
            // },
        });
    }

    handlerChanges = (event) => {
        this.setState({
            filterData: {
                ...this.state.filterData,
                [event.currentTarget.name]: event.currentTarget.value,
            },
        });
    };

    resetFilters = () => {
        this.setState({
            filterData: {
                availabilityFrom: null,
                availabilityTo: null,
                country: null,
                price: 0,
                size: null,
            },
        });
        window.location.reload(false);
    };

    render() {
        const { isLoading, hoteles, filterData } = this.state;
        const { availabilityFrom, availabilityTo } = filterData;
        return (
            <div className='app'>
                <Header
                    handlerChanges={this.handlerChanges}
                    availabilityFrom={availabilityFrom}
                    availabilityTo={availabilityTo}
                />
                {isLoading ? (
                    <div>No cargó</div>
                ) : (
                    <Mainview
                        hoteles={hoteles}
                        filterData={filterData}
                        resetFilters={this.resetFilters}
                    />
                )}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
