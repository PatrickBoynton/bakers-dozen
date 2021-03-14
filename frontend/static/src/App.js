import './App.css';
import {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import RecipeList from './components/layout/recipe/RecipeList';
import RecipeDisplay from './components/layout/recipe/RecipeDisplay';
import Ingredients from './components/layout/recipe/Ingredients';
import Navigation from './components/layout/Navigation/Navigation';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
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
