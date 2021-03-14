import {Component} from 'react';
import {NavLink} from 'react-router-dom';
class Navigation extends Component {
    render() {
        return (
            <>
                <nav className="nav d-flex flex-column">
                    <ul>
                        <li><NavLink activeClassName="background" className="nav-link" to="/login">Login</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/register">Register</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/profile">Profile</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/create-recipe">Create Recipe</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/recipes">My Recipes</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/public">Public Recipes</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/popular">Popular Recipes</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/favorites">My Favorite Recipes</NavLink></li>
                        <li><NavLink activeClassName="background" className="nav-link" to="/ingredients">My Pantry</NavLink></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navigation;