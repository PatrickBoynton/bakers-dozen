import {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text"/>
                <label htmlFor="email">Email</label>
                <input type="text"/>
                <label htmlFor="password1">Password</label>
                <input type="text"/>
                <label htmlFor="password2">Confirm Password</label>
                <input type="text"/>
                <label htmlFor="text">About Me</label>
                <textarea cols="30" rows="3"></textarea>
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        );
    }
}

export default Register