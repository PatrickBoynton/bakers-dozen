import {Component} from 'react';

class RecipeList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
    }
    async componentDidMount() {
        const recipeList = await fetch("/api/v1/recipes");
        const data = await recipeList.json();
        this.setState({recipes: data})
    }

    render() {
        const recipes = this.state.recipes?.map(recipe => <section key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.name}</p>
        </section> );
        return (
            <div>
                {recipes}
            </div>
        );
    }
}

export default RecipeList