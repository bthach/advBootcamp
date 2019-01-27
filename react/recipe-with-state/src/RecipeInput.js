import React, { Component } from 'react';
import './RecipeInput.css'

class RecipeInput extends Component {

    static defaultProps = {
        onClose() {},
        onSave() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        })
    }

    handleNewIngredient(event) {
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }

    handleChangeIngredient(event) {
        const index = Number(event.target.name.split('-'[1]));
        const ingredients = this.state.ingredients.map((ing, i) => (
            i === index ? event.target.value : ing
        ));
        this.setState({ingredients});
    }

    render() {
        const {title, instructions, img, ingredients} = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((ing, i) => (
            <div 
                className="recipe-form-line" 
                key={`ingredient-${i}`}>
                <label>{i+1}.
                    <input 
                        type="text"
                        name={`ingredient-${i}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder="Ingredient"
                        onChange={this.handleChangeIngredient} />
                </label>
            </div>
        ));

        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                <button type="button" 
                    className="close-button" onClick={onClose}>X</button>
                <div className='recipe-form-line'>
                    <label>Title</label>
                    <input 
                        key='title'
                        type='text'
                        name='title'
                        value={title}
                        size={42}
                        autoComplete="off"
                        placeholder="Recipe"
                        onChange={this.handleChange} />
                </div>
                <label>Instructions</label>
                <textarea
                    key='instructions'
                    id='recipe-instructions'
                    type='Instructions'
                    name='instructions'
                    row='8'
                    col='200'
                    autoComplete='off'
                    value={instructions}
                    onChange={this.handleChange}/>
                    {inputs}
                <button type="button" onClick={this.handleNewIngredient} className="buttons">+</button>
                <div className='recipe-form-line'>
                    <input
                        id='recipe-img'
                        type='text'
                        value={img}
                        name='img'
                        size={36}
                        autoComplete="off"
                        placeholder="IMG URL"
                        onChange={this.handleChange} />
                </div>
                <button type="submit"
                        className="buttons">
                        SAVE
                        </button>

                </form>
            </div>
        )
    }
}

export default RecipeInput;