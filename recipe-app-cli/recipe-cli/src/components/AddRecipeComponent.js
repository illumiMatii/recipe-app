import React, { Component } from 'react';
import RecipeService from '../services/RecipeService';
import '../styles/addrecipe.css'


class AddRecipeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            time: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleNameChange( e) {
        this.setState({name: e.target.value});
    }

    handleDescChange( e) {
        this.setState({description: e.target.value});
    }

    handleTimeChange( e) {
        this.setState({time: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let recipe = {name: this.state.name, description: this.state.description, time: this.state.time};
        
        RecipeService.addRecipe(recipe).then(res => {
            this.props.history.push("/showrecipes");
        });
    }


    render(){
        return (
            <div className="recipe">
                <h1>Dodaj przepis</h1>
                <form onSubmit={this.handleSubmit} className="recipe__container">
                    <span>Nazwa przepisu</span>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} required/>

                    <span>Przygotowanie</span>
                    <textarea rows="10" cols="50" onChange={this.handleDescChange} value={this.state.description}></textarea>
                    
                    <span>Czas przygotowania</span>
                    <input type="text" placeholder="np. 3.5h" onChange={this.handleTimeChange} value={this.state.time}/>
                    
                    <input type="submit" value="Dodaj" />
                </form>
            </div>
        );
    }
}

export default AddRecipeComponent;