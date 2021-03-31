import React,{Component} from "react";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import Nav from "../components/Nav/Nav";
// import {List} from "../components/List/List";

class Saved extends Component{

    state = {
        books:[]
    };
    componentDidMount(){
        this.getbooks();
    }
    getbooks = () =>{
        API.getBooks()
        .then(res =>{
        this.setState({
            books: res.data.items
        })  
    })
    .catch(err =>console.log(err));
    };
    deleteBook = id => {
        API.deleteBook(id).then(res => {
            this.books({});
        })
        .catch(err =>console.log(err));
    };
    render(){
        return(
         <div>
             <Nav/>
             <Container fluid>
             <Jumbotron>
                 <h1>Search Books</h1>
             </Jumbotron>
             
             
           </Container>
       </div>
   )
}
}

export default Saved