import './App.css';
import {Component} from 'react';
import RecipeDisplay from './components/layout/recipe/RecipeDisplay';

class App extends Component {
    render() {
        return (
            <div className="App">
                <RecipeDisplay/>
            </div>
        );
    }
}

export default App;
