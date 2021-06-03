package com.myrecipesapp.serv.repos;


import com.myrecipesapp.serv.Models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RecipeRepo extends JpaRepository<Recipe, Long> {
}
