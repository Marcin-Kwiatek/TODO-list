import React from 'react'

class TodoItem extends React.Component {
    render(){
        return(
            <div className='task'>
                {this.props.title}
                <button style={{marginLeft:'20px'}}>Edytuj</button>
                <button style={{marginLeft:'20px'}} onClick={this.removeTask.bind(this)}>Usuń</button>
            </div>
        )
    }
    removeTask(){
        this.props.removeTask(this.props.title)
    }
}
 
export default TodoItem
