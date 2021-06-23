import React from 'react'

class Todo extends React.Component {
    state = {
        elements: [
            {title:'Zrobić zakupy'},
            {title:'Zrobić pranie'},
            {title:'Zmyć naczynia'},
            {title:'Odkurzyć'},
            {title:'Pójść do pracy'},
            {title:'Naprawić samochód'},

        ]
    }
    render() {
        const elements = this.state.elements.map(e =>{
            return <div className='task'>{e.title}</div>
        })
        return(
            <>
                <div style={{clear:'both'}}>
                <div className="toDoTitle">Zadania do wykonania</div>
                {elements}
                </div>
            </>
        )
    }
}

export default Todo