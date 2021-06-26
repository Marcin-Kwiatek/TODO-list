import React from 'react'

class TodoItem extends React.Component {
    state = {displayRemoveTask:'none'}
    render(){
        return(
            <div className='task'>
                {this.props.title}
                <button style={{marginLeft:'20px'}}>Edytuj</button>
                <button style={{marginLeft:'20px'}} onClick={this.areYouSure.bind(this)}>Usuń</button>
                <div style={{display:this.state.displayRemoveTask }}>Czy na pewno chcesz usunąć?
                    <button onClick={this.cancelClick.bind(this)}>Nie</button>
                    <button onClick={this.removeTask.bind(this)}>Tak</button>
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
    }
    cancelClick(){
        this.setState({displayRemoveTask:'none'})
    }
}
 
export default TodoItem
