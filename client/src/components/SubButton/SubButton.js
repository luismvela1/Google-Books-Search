import React from 'react'

export function SubButton(props) {
    return(
    <button{...props} className="btn btn-danger">SUBMIT</button>
    )
}

export function SaveButton(props) {
    return(
    <button{...props}  className="btn btn-danger">SAVE BOOKS</button>
    )
}
