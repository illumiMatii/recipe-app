import axios from 'axios';

const BACKEND_URL = "http://localhost:8080"

class RecipeService {

    addRecipe(recipe) {
        return axios.post(`${BACKEND_URL}/addrecipe`, recipe);
    }

    getRecipes() {
        return axios.get(`${BACKEND_URL}/showrecipes`);
    }

    getRecipeById(recipeId) {
        return axios.get(`${BACKEND_URL}/${recipeId}`);
    }

    updateRecipe(recipe, recipeId) {
        return axios.put(BACKEND_URL + '/' + recipeId, recipe);
    }
    
}

export default new RecipeService();