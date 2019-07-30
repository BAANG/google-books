import React, { Component } from "react";
import Navbar from '../Navbar'
import Jumbotron from '../Jumbotron'
import API from '../../utils/api'
import ResultCard from "../ResultCard";
import SearchForm from "../SearchForm";

class Home extends Component {
    state = {
        books: [],
        results: [],
        title: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.title)
            .then(res => {
                this.setState({
                    results: res.data.items
                })
            })
            .catch(err => {
                throw err
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <div className='container'>
                    <SearchForm
                    handleFormSubmit = {this.handleFormSubmit} />
                    <div className='container-fluid' id='main-content'>
                        {this.state.results.map((book) => {
                            return (
                                <ResultCard
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
