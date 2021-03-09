import {Component} from 'react';

class Ingredients extends Component {
    render() {
        return (
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
        );
    }
}

export default Ingredients;