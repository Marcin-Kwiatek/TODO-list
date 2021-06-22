import React from 'react'

class Todo extends React.Component {
    state = {
        elements: [
            {id:'23424', title:'Zrobić zakupy'},
            {id:'23334', title:'Zrobić pranie'},
            {id:'23234', title:'Zmyć naczynia'},
        ]
    }
    render() {
        const elements = this.state.elements.map(e =>{
            return <div className='task' key={e.id}>{e.title}</div>
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