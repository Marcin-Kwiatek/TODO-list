import React from 'react'

class Registration extends React.Component {
    render() {
        return(
            <>
                <div className="container">
                    <div className="toDoTitle">Rejestracja</div>
                    <input className="inputToLogin" type='text'></input>
                    <input className="inputToLogin" type='password'></input>
                    <button className="confirmationButton">Zatwierdź</button>

                </div>
            </>
        )
    }
}

export default Registration