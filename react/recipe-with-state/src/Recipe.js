import React, { Component } from 'react';
import './Recipe.css'
import PropTypes from 'prop-types';

class Recipe extends Component {
    static defaultProps = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.stringisRequired,
        img: PropTypes.stringisRequired
    }
    render() {
        const {title, img, instructions} = this.props; // same as const title = this.props.title
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />  
                </div>
                <div className="recipe-card-content">
                    <h3>{title}</h3>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions</h4>
                    <p>{instructions}</p>
                </div>
            </div>
        );
    }
}

export default Recipe;