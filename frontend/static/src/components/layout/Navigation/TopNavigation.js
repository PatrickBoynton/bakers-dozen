import {Component} from 'react';

class TopNavigation extends Component {
    render() {
        return (
            <>
                <nav className="nav top-nav">
                    <div className="d-flex">
                        <p>The Kitchen is yours chef!</p>
                        <h2>Bakers Dozen</h2>
                    </div>
                    <i className="fa fa-plus"></i>
                    <i className="fa fa-gear"></i>
                    <i className="fa fa-user"></i>
                </nav>
            </>
        );
    }
}

export default TopNavigation;