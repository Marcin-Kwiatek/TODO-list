import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component {
    state = {
        elements: [
            {title:'Zrobić zakupy'},
            {title:'Zrobić pranie'},
            {title:'Zmyć naczynia'},
            {title:'Odkurzyć'},
            {title:'Pójść do pracy'},
            {title:'Naprawić samochód'},
        ],
        inputValue: ""
    }
    render() {
        const elements = this.state.elements.map(e =>{
            return <TodoItem title={e.title} removeTask={this.removeTask.bind(this)}></TodoItem>
        })
        return(
            <>
                <div style={{clear:'both'}}>
                <div className="toDoTitle">
                    Zadania do wykonania
                    <button className='sortButton'>Sortuj od A do Z</button>
                    <input value={this.state.inputValue} onChange={this.inputHandler.bind(this)} style={{marginLeft:'50px'}}
                     type='text'></input>
                    <button style={{marginLeft:'5px'}} onClick={this.addTask.bind(this)}>Dodaj do listy</button>
                </div>
                {elements}
                </div>
            </>
        )
    }
    addTask(){
        const item = {
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]
        this.setState({elements: newElements})
    }
    inputHandler(event){
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }
    removeTask(title){
        let filteredElements = []
        for(let i=0; i<this.state.elements.length;i++){
           if(this.state.elements[i].title!==title){
               filteredElements.push(this.state.elements[i])
           }
        }
        this.setState({elements: filteredElements})
    }
}

export default Todo