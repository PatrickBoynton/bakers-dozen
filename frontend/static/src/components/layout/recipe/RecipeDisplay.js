import {Component} from 'react';

class RecipeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: '',
        }
    }

    async componentDidMount() {
        const id = window.location.href;
        const response = await fetch(`/api/v1/recipes/${id[id.length - 1]}/`);
        const data = await response.json();
        if (response !== null || response !== undefined) {
            this.setState({recipe: data})
        }
    }

    render() {
        const recipe = <section>
            <h2>{this.state.recipe.title}</h2>
            <p>{this.state.recipe.name}</p>
        </section>
        return (
            <>
                {recipe}
            </>
        );
    }
}

export default RecipeDisplay;