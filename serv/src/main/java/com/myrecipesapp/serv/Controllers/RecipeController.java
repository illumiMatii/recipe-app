package com.myrecipesapp.serv.Controllers;


import com.myrecipesapp.serv.Models.Recipe;
import com.myrecipesapp.serv.repos.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class RecipeController {

    @Autowired
    RecipeRepo recipeRepository;

    @CrossOrigin
    @PostMapping("/addrecipe")
    public Recipe addRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @CrossOrigin
    @GetMapping("/showrecipes")
    public List<Recipe> showAllRecipes() {
        return recipeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Recipe> getRecipeById(@PathVariable Long id) {
        return recipeRepository.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe recipeDetails){
        Recipe recipe = recipeRepository.findById(id).orElseThrow();

        recipe.setName(recipeDetails.getName());
        recipe.setDescription(recipeDetails.getDescription());
        recipe.setTime(recipeDetails.getTime());

        Recipe updatedRecipe = recipeRepository.save(recipe);
        return ResponseEntity.ok(updatedRecipe);
    }


}
