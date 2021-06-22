import Todo from './Todo'
import Registration from './Registration'
import React from 'react';
import Login from './Login'


class App extends React.Component {
  render(){
  return (
    <>
      <Registration></Registration>
      <Login></Login>
      <Todo></Todo>
    </> 
  )}
}

export default App;
