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
                {/*Ingredients form*/}
                <form action="">
                    <label htmlFor="servings">Servings</label>
                    <input type="number" name="servings"/>
                    <select>
                        <option value="Fahrenheit">F</option>
                        <option value="Celsius">C</option>
                    </select>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" name="ingredients"/>
                    <button>Add Ingredient</button>
                    <label htmlFor="measurements">Measurements</label>
                    <input type="text" name="measurements"/>
                    <button type="submit">Add Recipe</button>
                </form>
            {/* Notes form. */}
                <form action="">
                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes"></textarea>
                    <button type="submit">Add note</button>
                </form>
            </div>
        );
    }
}

export default App;
