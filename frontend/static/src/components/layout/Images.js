import {Component} from 'react';
import pizza from '../../images/lavi-perchik-LAJFSTJ5H-w-unsplash.jpg';
import fish from '../../images/mariana-medvedeva-iNwCO9ycBlc-unsplash.jpg';
import burger from '../../images/taylor-harding-8UjWV6iptCk-unsplash.jpg';
import salad from '../../images/brooke-lark-jUPOXXRNdcA-unsplash (1).jpg';

class Images extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <p>{this.props.name}</p>
            <div className="d-flex">
                <hr/>
                <p>view all ›</p>
            </div>
            <div className="d-flex justify-content-center">
                <input type="file"/>
                <img className="img-thumbnail img-fluid thumb" src={pizza} alt="food"/>
                <img className="img-thumbnail img-fluid thumb" src={fish} alt="food1"/>
                <img className="img-thumbnail img-fluid thumb" src={burger} alt="food2"/>
                <img className="img-thumbnail img-fluid thumb" src={salad} alt="food3"/>
            </div>
        </>;
    }
}

export default Images;