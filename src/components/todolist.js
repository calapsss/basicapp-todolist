import React from 'react';
import App from '../App';
//components
import Todo from './todo';




function TodoList({todos, setTodos, filterTodos}){

   
    return(
        <div className="todo-containter">
            <ul className='todo-list'>
                {filterTodos.map(todo => (
                    <Todo 
                        key ={todo.id} 
                        text={todo.text}
                        setTodos = {setTodos}
                        todos = {todos}
                        todo = {todo}
                    /> 
                ))}

            </ul> 


        </div>

    );


};



export default TodoList;



