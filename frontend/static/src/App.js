import './App.css';
import {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import RecipeList from './components/layout/recipe/RecipeList';
import RecipeDisplay from './components/layout/recipe/RecipeDisplay';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/recipes" component={RecipeList}/>
                    <Route path="/recipe/:id">
                        <RecipeDisplay/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
