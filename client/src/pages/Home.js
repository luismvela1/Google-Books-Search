import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import Nav from "../components/Nav/Nav";
import {List} from "../components/List/List";
import React,{ Component } from "react";
import  {Input}from "../components/inputSearch/inputSearch";
import { SubButton} from "../components/SubButton/SubButton";

class Home extends Component {
    state = {
        books:[],
        search:""
    };
    filterbooks = () =>{
        API.googlebooks(this.state.search)
        .then(res =>{
        this.setState({
            books: res.data.items,
            search:""
        })})
        
        .catch(err =>console.log(err));
        
    };
    handleInputChange = event => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        });
        console.log(value)
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.filterbooks();
    };
    savedBooks = data => {
        API.saveBook(data)
        .catch(err => console.log(err));
    }

    render(){
        return(
         <div>
             <Nav/>
             <Container fluid>
             <Jumbotron>
                 <h1>Search Books</h1>
                 <h1>Search and save your favorite books!</h1>
             </Jumbotron>
             <form>
             <Input
                value={this.search}
                type="text"
                name="search"
                placeholder="Title (required)"
                onChange={this.handleInputChange}
              />
                <SubButton onClick={this.handleFormSubmit}/>
             </form>
             {this.state.books.map(books => {
                 return(
               <List
                key={books.id}
                title={books.volumeInfo.title}
                author={books.volumeInfo.authors}
                id={books.id}
                href={books.volumeInfo.previewLink}
                thumbnail={books.volumeInfo.imageLinks.thumbnail}
                description={books.volumeInfo.description}     
               />
                 )
            })}
           </Container>
       </div>
        );

}
}

export default Home

