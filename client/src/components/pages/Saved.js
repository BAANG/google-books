import React, { Component } from "react";
import Navbar from '../Navbar'
import Jumbotron from '../Jumbotron'
import API from '../../utils/api'
import ResultCard from "../ResultCard";

class Saved extends Component {
    state = {
        books: [],
        results: [],
        title: "",
        author: ""
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBook(this.state.title)
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <div className='container'>
                    <h3>Your Saved Books</h3>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Saved;
