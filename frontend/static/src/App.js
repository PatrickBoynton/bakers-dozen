import './App.css';
import {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servings: 2,
            unitTypes: ['Metric', 'US'],
            units: ['C', 'F'],
            items: ['carrots', 'apples', 'bread', 'celery', 'rice'],
            measurements: ['teaspoon', 'cup', 'pounds', 'pint'],
        };
    }

    render() {
        return (
            <div className="App">
                {/* Notes form. */}

            </div>
        );
    }
}

export default App;
