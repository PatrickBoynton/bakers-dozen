import './App.css';
import {Component} from 'react';
import Navigation from './components/layout/Navigation/Navigation';
import TopNavigation from './components/layout/Navigation/TopNavigation';
import BatchAdjust from './components/layout/recipe/BatchAdjust';
import Ingredients from './components/layout/recipe/Ingredients';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Ingredients/>
            </div>
        );
    }
}

export default App;
