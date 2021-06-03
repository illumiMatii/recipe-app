import React, { Component } from 'react';
import '../styles/home.css';


class HomeComponent extends Component { 
    render(){
        return (
            <div className="home">
                <h1>Welcome to MyRecipesApp</h1>
                <h3>Place where you can collect your favourite recipes</h3>
            </div>
        );
    }
}

export default HomeComponent;