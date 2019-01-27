import React, { Component } from 'react';
import './RecipeApp.css';
import Nav from './Nav';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "food",
          ingredients: ['water'],
          instructions: "instructions here",
          img: "spaghetti.jpg"
      },
      {
          id: 1,
          title: "food2",
          ingredients: ['water'],
          instructions: "instructions here",
          img: "spaghetti.jpg"
      },
      {
          id: 2,
          title: "food3",
          ingredients: ['water'],
          instructions: "instructions here",
          img: "spaghetti.jpg"
      }
      ],
      nextRecipeId: 3,
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId}
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    })
  }



  render() {
    return (
      <div className="App">
        <Nav />
        <RecipeInput onSave={this.handleSave} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
