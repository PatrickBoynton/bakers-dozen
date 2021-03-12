import {Component} from 'react';
import {Redirect} from 'react-router-dom';

class RecipeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: '',
            isEditMode: false,
            title: '',
            name: '',
            recipe_type: '',
            redirect: false,
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleEditMode() {
        this.setState((previousState) => ({isEditMode: !previousState.isEditMode}));
    }

    handleEdit(event) {
        event.preventDefault();
        // console.log(event.target);
        this.setState({redirect: true});
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async componentDidMount() {
        const id = window.location.href;
        const response = await fetch(`/api/v1/recipes/${id[id.length - 1]}/`);
        const data = await response.json();
        if (response !== null || response !== undefined) {
            this.setState({recipe: data});
        }
    }

    render() {
        const recipe = <section>
            {
                this.state.isEditMode
                    ?
                    <>
                        <form action="" onSubmit={() => this.handleEdit()}>
                            <input name="title" onChange={this.handleInput} value={this.state.recipe.title}/>
                            <input onChange={this.handleInput} value={this.state.recipe.name}/>
                            <select onChange={this.handleInput} value={this.state.recipe_type}>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                            <button type="submit">Submit</button>
                        </form>
                    </>
                    :
                    <>
                        <h2>{this.state.recipe.title}</h2>
                        <p>{this.state.recipe.name}</p>
                    </>
            }
            {/*TODO Make it so user is only one to edit recipe*/}
            <button onClick={() => this.handleEditMode()}>Edit Recipe</button>
        </section>;
        if (this.state.redirect) {
            return <Redirect to="/recipes"/>;
        }
        return (
            <>
                {recipe}
            </>
        );
    }
}

export default RecipeDisplay;