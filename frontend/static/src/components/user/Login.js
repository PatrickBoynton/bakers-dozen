import {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <form>
                <input type="text" name="username" id=""/>
                <input type="email" name="email" id=""/>
                <input type="password" name="password" id=""/>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        );
    }
}

export default Login;