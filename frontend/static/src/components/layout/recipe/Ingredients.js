import {Component} from 'react';
import Cookies from 'js-cookie';

class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ingredient_array: [],
            // ingredients: '',
            title: '',
            name: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // addIngredient(e) {
    //     e.preventDefault();
    //     this.setState({ingredient_array: [...this.state.ingredient_array, this.state.ingredients]});
    // }
    //
    // addStep(e) {
    //     e.preventDefault();
    //     this.setState({steps: [...this.state.steps, this.state.step]})
    // }

    async handleSubmit(e) {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                // 'X-CSRFToken': Cookies.get("csrftoken")
            },
            body: JSON.stringify({
                title: this.state.title,
                name: this.state.name
            })
        };
        await fetch('/api/v1/recipes/', options);
        this.setState({title: this.state.title, name: this.state.name});
    }

    render() {
        // const stepsDisplay = this.state.steps?.map(x => <textarea>{x}</textarea>);
        // const ingredientDisplay = this.state.ingredient_array?.map((x, index) => <div key={index}>
        //     <input key={index} type="text" value={x} disabled/>
        //     <button className="btn btn-danger" onClick={(e) => e.preventDefault()}>X</button>
        // </div>);
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h2>Add an Ingredient</h2>
                <label htmlFor="title">Recipe Name</label>
                <input type="text" onChange={this.handleInput} value={this.state.title} name="title" id=""/>
                <label htmlFor="name">Your Name</label>
                <input type="text" onChange={this.handleInput} value={this.state.name} name="name"/>
                {/*<label htmlFor="ingredients">Ingredients</label>*/}
                {/*{ingredientDisplay}*/}
                {/*<input className="form-control"*/}
                {/*       type="text"*/}
                {/*       name="ingredients"*/}
                {/*       value={this.state.ingredients}*/}
                {/*       onChange={this.handleInput}/>*/}
                {/*<button className="btn btn-success" onClick={(e) => this.addIngredient(e)}>Add Ingredient</button>*/}
                {/*<label htmlFor="step">Steps</label>*/}
                {/*<input className="form-control"*/}
                {/*       type="text"*/}
                {/*       value={this.state.step}*/}
                {/*       onChange={this.handleInput}*/}
                {/*       name="step"/>*/}
                {/*<button className="btn btn-success mb-3" onClick={(e) => this.addStep(e)}>Add Steps</button>*/}
                <button className="btn btn-primary" type="submit">Add Recipe</button>
            </form>
        );
    }

}

export default Ingredients;