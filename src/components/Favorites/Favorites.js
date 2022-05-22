import React, { Component } from 'react';
import './Favorites.css';
import {connect} from "react-redux";
import {removeMovieFromFavorites} from "../../redux/action"

class Favorites extends Component {

    state = {
        title: ""
    }

    onInputEnter = (e) => {
        this.setState({title: e.target.value})
    }

    render() { 
        return (
            <div className="favorites">
                <input onChange={this.onInputEnter} value={this.state.title} className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favoriteMovies.map((item) => {
                        return <li className='list__item' key={item.id}>{item.title} ({item.year}) <button onClick={() => this.props.removeMovieFromFavorites(item.id)} className='close__btn'>X</button></li>
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeMovieFromFavorites: (Id) => {
            dispatch(removeMovieFromFavorites(Id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);