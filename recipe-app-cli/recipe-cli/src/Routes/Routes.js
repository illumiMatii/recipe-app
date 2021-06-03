import React from 'react';
import { Route } from 'react-router-dom';
import AddRecipeComponent from '../components/AddRecipeComponent';
import AllRecipesComponent from '../components/AllRecipesComponent';
import HomeComponent from '../components/HomeComponent';
import EditRecipeComponent from '../components/EditRecipeComponent';

export default () => {
    return (
        <>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/addrecipe" component={AddRecipeComponent} />
            <Route path="/showrecipes" component={AllRecipesComponent} />
            <Route path="/update-recipe/:id" component={EditRecipeComponent} />
        </>
    );
}