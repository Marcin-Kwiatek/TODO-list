import React from 'react'

class TodoItem extends React.Component {
    state = {displayRemoveTask:'none', displayEditTask:'none', editInputValue:this.props.title}
    render(){
        return(
            <div className='task'>
                {this.props.title}
                <button style={{marginLeft:'20px'}} onClick={this.editText.bind(this)}>Edytuj</button>
                <button style={{marginLeft:'20px'}} onClick={this.areYouSure.bind(this)}>Usuń</button>
                <div style={{display:this.state.displayRemoveTask, marginLeft:'20px' }}>Czy na pewno chcesz usunąć?
                    <button onClick={this.cancelClick.bind(this)} style={{marginLeft:'20px'}}>Nie</button>
                    <button onClick={this.removeTask.bind(this)} style={{marginLeft:'20px'}}>Tak</button>
                </div>
                <div style={{display:this.state.displayEditTask, marginLeft:'20px' }}>Podaj nowy tekst
                    <input type="text" value={this.state.editInputValue}style={{marginLeft:'20px'}}
                     onChange={this.editInputHandler.bind(this)}></input>
                    <button onClick={this.cancelEdit.bind(this)} style={{marginLeft:'20px'}}>Anuluj</button>
                    <button onClick={this.editTask.bind(this)} style={{marginLeft:'20px'}}>Zatwierdź</button>
                </div>
            </div>
        )
    }
    removeTask(){
        this.setState({displayRemoveTask:'none'})
        this.props.removeTask(this.props.title)
    }
    areYouSure(){
        this.setState({displayRemoveTask:'inline'})
        this.setState({displayEditTask:'none'})
    }
    cancelClick(){
        this.setState({displayRemoveTask:'none'})
    }
    editText(){
        this.setState({displayRemoveTask:'none'})
        this.setState({displayEditTask:'inline'})
    }
    cancelEdit(){
        this.setState({displayEditTask:'none'})
    }
    editTask(){
        this.setState({displayEditTask:'none'})
        this.props.editTask(this.props.title, this.state.editInputValue)
    }   
    editInputHandler(event){
        const editValue = event.target.value
        this.setState({editInputValue: editValue})
    }
}
 
export default TodoItem
