import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component {
    state = {
        elements: [
            {title:'zrobić zakupy'},
            {title:'zrobić pranie'},
            {title:'zmyć naczynia'},
            {title:'odkurzyć'},
            {title:'pójść do pracy'},
            {title:'naprawić samochód'},
        ],
        inputValue: "",
        sortButton: "Sortuj od A do Z"
    }
    render() {
        const elements = this.state.elements.map(e =>{
            return <TodoItem title={e.title} removeTask={this.removeTask.bind(this)}
             editTask={this.editTask.bind(this)}></TodoItem>
        })
        return(
            <>
                <div style={{clear:'both'}}>
                <div className="toDoTitle">
                    Zadania do wykonania
                    <button className='sortButton' onClick={this.sortTask.bind(this)}>{this.state.sortButton}</button>
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
        this.setState({inputValue: ""})
    }
    inputHandler(event){
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }
    removeTask(title){
        let filteredElements = this.state.elements.filter((element)=>element.title!==title)
        this.setState({elements: filteredElements})
    }
    sortTask(){
        if(this.state.sortButton=== "Sortuj od A do Z"){
        let sortedElements = this.state.elements.sort((a,b)=>{
            if(b.title>a.title) return -1
            else return 1
        })
        this.setState({elements: sortedElements})
        this.setState({sortButton: "Sortuj od Z do A"})}

        if(this.state.sortButton=== "Sortuj od Z do A"){
            let sortedElements = this.state.elements.sort((a,b)=>{
                if(b.title<a.title) return -1
                else return 1
            })
            this.setState({elements: sortedElements})
            this.setState({sortButton: "Sortuj od A do Z"})}
    }
    editTask(title, editInputValue){
        let editElements = this.state.elements.filter((element)=>element.title !== title)
        let titles = this.state.elements.map((item)=> item.title)
        editElements.splice(titles.indexOf(title),0,{title:editInputValue})
        this.setState({elements:editElements})
    }
}

export default Todo