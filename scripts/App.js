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
        this.setState({ hoteles: hotelsData, isLoading: false });
    }

    handlerChanges = (event) => {
        this.setState({
            filterData: {
                ...this.state.filterData,
                [event.currentTarget.name]: event.currentTarget.value,
            },
        });
    };

    render() {
        const { isLoading } = this.state;
        const { availabilityFrom, availabilityTo } = this.state.filterData;
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
                        hoteles={this.state.hoteles}
                        filterData={this.state.filterData}
                    />
                )}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
