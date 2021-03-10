import {Component} from 'react';

class RecipePreview extends Component {
    render() {
        return (
            <>
                <h1>The Best Spaghetti Ever!</h1>
                <p>By Patrick Boynton</p>
                <img src="#" alt="Spaghetti Dinner"/>
                <p>Recipe Type</p>
                <h2>Dinner</h2>
                <p>Prep Time</p>
                <h2>15 Mins</h2>
                <p>Cook Time</p>
                <h2>20 Mins</h2>
                <p>Cook Temp</p>
                <h2>320°</h2>
                <h3>Ingredients</h3>
                <ul>
                    <li>1 lb ground beef</li>
                    <li>1 onion chopped</li>
                    <li>4 cloves garlic, minced</li>
                    <li>1 small green bell pepper, diced</li>
                    <li>1 (28 ounce) can of diced tomatoes</li>
                    <li>2 teaspoons of dried oregano</li>
                    <li>2 teaspoons of dried basil</li>
                    <li>1 teaspoon of salt</li>
                </ul>
                    <h3>Step 1</h3> <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur dolor enim eos magnam quia ratione reiciendis tenetur unde voluptate?</p>
                    <h3>Step 2</h3> <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est harum mollitia nobis obcaecati repellat sequi sit tempora ut. Deserunt, veniam.</p>
                <h3>Personal Notes</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem eligendi error eum ex ipsum magni nobis nulla possimus praesentium quam, qui saepe similique tenetur voluptatibus? Animi laborum nam totam!</p>

                <button className="btn btn-primary">Edit this Recipe</button>
            </>
        );
    }
}

export default RecipePreview;