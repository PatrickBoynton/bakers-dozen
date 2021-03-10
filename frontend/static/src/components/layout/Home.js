import {Component} from 'react';
import Images from './Images';

class Home  extends Component{
    render() {
        return <>
            <Images name="My Recipes"/>
            <Images name="Public Recipes"/>
            <Images name="Popular Recipes"/>
            <Images name="My Favorite Recipes"/>
            <Images name="My Pantry Recipes"/>
        </>
    }
}

export default Home
