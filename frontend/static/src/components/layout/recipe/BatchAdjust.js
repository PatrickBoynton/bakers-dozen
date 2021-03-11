import {Component} from 'react';

class BatchAdjust extends Component {
    render() {
        return (
            <form className="d-flex flex-column">
                <p>Makes</p>
                <label htmlFor="amount">amount</label>
                <input type="number" name="amount"/>
                <label htmlFor="units">US</label>
                <input type="radio" name="units"/>
                <label htmlFor="metric">Metric</label>
                <input type="radio" name="units"/>
                <button className="btn btn-success" type="submit">Adjust recipe</button>
            </form>
        );
    }
}

export default BatchAdjust;