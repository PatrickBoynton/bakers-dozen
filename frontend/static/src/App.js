import './App.css';
import {Component} from 'react';
import Navigation from './components/layout/Navigation/Navigation';
import TopNavigation from './components/layout/Navigation/TopNavigation';
import BatchAdjust from './components/layout/recipe/BatchAdjust';

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
                <BatchAdjust/>
            </div>
        );
    }
}

export default App;
