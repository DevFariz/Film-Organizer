import React, { Component } from 'react';
import './Favorites.css';
import {connect} from "react-redux";

class Favorites extends Component {

    onInputEnter = (e) => {
        this.setState({title: e.target.value})
    }

    render() { 
        return (
            <div className="favorites">
                <input onChange={this.onInputEnter} value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favoriteMovies.map((item) => {
                        return <li className='list__item' key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.favoriteMovies
    }
}

export default connect(mapStateToProps)(Favorites);