import {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <>
                <nav className="nav flex-column">
                    <li><a className="nav-link" href="#">My Recipes</a></li>
                    <li><a className="nav-link" href="">Public Recipes</a></li>
                    <li><a className="nav-link" href="">Popular Recipes</a></li>
                    <li><a className="nav-link" href="">My Favorite Recipes</a></li>
                    <li><a className="nav-link" href="">My Pantry</a></li>
                </nav>
            </>
        );
    }
}

export default Navigation;