import React from "react";



export function List(props) {
    return (
        <div key={props.id}>
      <div className="list-overflow-container">
        
        <img src={props.thumbnail} className="rounded float-start"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title">{props.author}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.previewLink} className="btn btn-primary">VIEW BOOK</a>
      </div>
      </div>
      </div>
    );

  }
                           
    


export default List;
