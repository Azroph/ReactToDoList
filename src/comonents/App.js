import React from 'react';
import ToDoList from ToDoList;

class App extends React.Component{
    render(){
      return(
        <section>
            <ToDoList/>
            <NavBar/>
        </section>
      )
    }
  }

  export default App