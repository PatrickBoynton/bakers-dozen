import {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id=""/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id=""/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id=""/>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        );
    }
}

export default Login;