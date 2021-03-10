import {Component} from 'react';

class Notes extends Component {
    render() {
        return (
            <form action="">
                <label htmlFor="notes">Notes</label>
                <textarea name="notes"></textarea>
                <button type="submit">Add note</button>
            </form>
        );
    }
}

export default Notes