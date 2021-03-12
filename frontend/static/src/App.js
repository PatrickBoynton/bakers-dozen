import './App.css';
import {Component} from 'react';
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
