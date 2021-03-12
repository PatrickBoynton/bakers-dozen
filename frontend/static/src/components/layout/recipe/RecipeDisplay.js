import {Component} from 'react';

class RecipeDisplay extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const response = await fetch(`/api/v1/recipes/1/`);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                RecipeDisplay
            </div>
        );
    }
}

export default RecipeDisplay;