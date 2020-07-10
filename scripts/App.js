import Header from "./components/Header";
import Mainview from "./components/Mainview";

class App extends React.Component {
    state = {
        data: null,
    };

    componentDidMount() {
        this.setState({ data: hotelsData });
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <Mainview hoteles={this.state.data} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
