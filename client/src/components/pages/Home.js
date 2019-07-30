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
    
    handleSaveBook = event => {
        event.preventDefault();
        const bookID = event.target.getAttribute('data-id')
        console.log("Book ID:", bookID )
        const newState = {...this.state}
        console.log(this.state.results)
        let targetBook = this.state.results.filter(book => book.id === bookID)
        if (newState.books[bookID] === targetBook[0]) {
            console.log(`You've already saved that book.`)
        } else {
            newState.books[bookID] = targetBook
            console.log('Target:', targetBook[0])
            this.setState(newState)
            API.saveBook({
                title: targetBook[0].volumeInfo.title,
                authors: targetBook[0].volumeInfo.authors,
                description: targetBook[0].volumeInfo.description,
                image: targetBook[0].volumeInfo.imageLinks.thumbnail,
                link: targetBook[0].volumeInfo.infoLink
            })
            console.log(newState.books)
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <div className='container'>
                    <SearchForm
                    handleFormSubmit = {this.handleFormSubmit}
                    handleInputChange = {this.handleInputChange} />
                    <div className='container-fluid' id='main-content'>
                        {this.state.results.map((book) => {
                            return (
                                <ResultCard
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    id={book.id}
                                    link={book.volumeInfo.infoLink}
                                    author={book.volumeInfo.authors}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    description={book.volumeInfo.description}
                                    saveBook={this.handleSaveBook}
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
