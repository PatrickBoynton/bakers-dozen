import {Component} from 'react';

class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unit_type: ['US', 'Metric'],
            ingredient_array: [],
            recipe_type: ['Breakfast', 'Lunch', 'Dinner'],
            steps: [],
            step: '',
            ingredients: '',
            servings: 0,
            units: '',
            prep_time: '',
            cook_time: '',
            measurements: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    addIngredient(e) {
        e.preventDefault();
        this.setState({ingredient_array: [...this.state.ingredient_array, this.state.ingredients]});
    }

    addStep(e) {
        e.preventDefault();
        this.setState({steps: [...this.state.steps, this.state.step]})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const stepsDisplay = this.state.steps?.map(x => <textarea>{x}</textarea>)
        const ingredientDisplay = this.state.ingredient_array?.map((x, index) => <div key={index}>
            <input key={index} type="text" value={x} disabled/>
            <button className="btn btn-danger" onClick={(e) => e.preventDefault()}>X</button>
        </div>);
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h2>Add an Ingredient</h2>
                <label htmlFor="servings">Servings</label>
                <input className="form-control" type="number"
                       value={this.state.servings}
                       onChange={this.handleInput}
                       name="servings"/>
                <label htmlFor="temperature">Cooking temperature</label>
                <select className="form-control" onChange={this.handleInput}>
                    <option value={this.state.units}>F</option>
                    <option value={this.state.units}>C</option>
                </select>
                <label htmlFor="ingredients">Ingredients</label>
                {ingredientDisplay}
                <input className="form-control"
                       type="text"
                       name="ingredients"
                       value={this.state.ingredients}
                       onChange={this.handleInput}/>
                <button className="btn btn-success" onClick={(e) => this.addIngredient(e)}>Add Ingredient</button>
                <label htmlFor="prep-time">Prep Time</label>
                <input className="form-control"
                       type="text"
                       value={this.state.prep_time}
                       onChange={this.handleInput}
                       name="prep_time"/>
                <label htmlFor="cook-time">Cook Time</label>
                <input className="form-control"
                       type="text"
                       value={this.state.cook_time}
                       onChange={this.handleInput}
                       name="cook_time"/>
                <label htmlFor="measurements">Measurements</label>
                <input className="form-control"
                       type="text"
                       value={this.state.measurements}
                       onChange={this.handleInput}
                       name="measurements"/>
                <label htmlFor="step">Steps</label>
                <input className="form-control"
                       type="text"
                       value={this.state.step}
                       onChange={this.handleInput}
                       name="step"/>
                <button className="btn btn-success mb-3" onClick={(e) => this.addStep(e)}>Add Steps</button>
                <button className="btn btn-primary" type="submit">Add Recipe</button>
            </form>
        );
    }

}

export default Ingredients;