import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/header.css"

class HeaderComponent extends Component {
    render() {
        return (
            <ul className="header">
                <li className="header__logo"><Link to="/" className="logo__logo">MyRecipesApp</Link></li>
                <ul className="header__buttons">
                    <li className="buttons__button"><Link to="/addrecipe" className="button">Add Recipe</Link></li>
                    <li className="buttons__button"><Link to="/showrecipes" className="button">Show Recipes</Link></li>
                </ul>
            </ul>
        );
    }
}

export default HeaderComponent;