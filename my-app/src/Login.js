import React from 'react'

class Login extends React.Component {
    render() {
        return(
            <>
                <div className="container">
                    <div className="toDoTitle">Zaloguj się</div>
                    <input className="inputToLogin" type='text'></input>
                    <input className="inputToLogin" type='password'></input>
                    <button className="confirmationButton">Zatwierdź</button>

                </div>
            </>
        )
    }
}

export default Login