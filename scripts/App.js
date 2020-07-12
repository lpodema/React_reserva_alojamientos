class App extends React.Component {
    state = {
        hoteles: null,
        isLoading: true,
        filterData: {
            availabilityFrom: 0,
            availabilityTo: 0,
            country: null,
            price: 0,
            size: null,
        },
    };

    componentDidMount() {
        this.setState({ hoteles: hotelsData });
        this.setState({ isLoading: false });
        // console.log(Date.now());
    }

    handlerChanges = (event) => {
        //console.log(event.currentTarget);
        this.setState({
            filterData: {
                ...this.state.filterData,
                [event.currentTarget.name]: event.currentTarget.value,
            },
        });
    };
    render() {
        const { isLoading } = this.state;

        return (
            <div className='app'>
                <Header handlerChanges={this.handlerChanges} />
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
