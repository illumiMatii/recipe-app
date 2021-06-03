import React, { Component } from 'react';
import RecipeService from '../services/RecipeService';
import '../styles/allrecipes.css';

class AllRecipesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }

        this.editRecipe = this.editRecipe.bind(this);
    }

    editRecipe(id) {
        this.props.history.push(`/update-recipe/${id}`)
    }

    componentDidMount() {
        RecipeService.getRecipes().then((res) => {
            this.setState({recipes: res.data});
        });
    }


    render(){
        return (
            <div className="container__all-recipes">
                <h2>Lista przepisów</h2>
                <div className="all-recipes__recipes">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nazwa potrawy</th>
                                <th>Opis potrawy</th>
                                <th>Czas przygotowania</th>
                                <th>Akcja</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.recipes.map(
                                    recipe =>
                                    <tr key = {recipe.id}>
                                        <td>{recipe.name}</td>
                                        <td>{recipe.description}</td>
                                        <td>{recipe.time}</td>
                                        <td><input onClick={() => this.editRecipe(recipe.id)} type="submit" value="Edytuj"/></td>
                                    </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AllRecipesComponent;