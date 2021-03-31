import axios from "axios";

export default {
    googlebooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    getBook: function(id){
        return axios.get("/api/books/"+id);
    },
    getBooks: function(){
        return axios.get("/api/books/");
    },
    deleteBook: function(id){
        return axios.get("/api/books/"+id);
    },
    saveBook: function(bookData){
        return axios.get("/api/books", bookData);
    },

}