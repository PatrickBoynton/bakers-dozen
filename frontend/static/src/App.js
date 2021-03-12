import './App.css';
import {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import RecipeList from './components/layout/recipe/RecipeList';
import RecipeDisplay from './components/layout/recipe/RecipeDisplay';
import Ingredients from './components/layout/recipe/Ingredients';
import Navigation from './components/layout/Navigation/Navigation';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route path="/recipes" component={RecipeList}/>
                    <Route path="/recipe/:id">
                        <RecipeDisplay/>
                    </Route>
                    <Route path="/create-recipe" component={Ingredients}/>
                </Switch>
            </div>
        );
    }
}

export default App;
