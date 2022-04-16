import React from "react";
import App from "../App";





function Form({setInputText,todos,setTodos, inputText, setStatus}){

  function inputTextHandler(e){
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  function submitTodoHandler(e){
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() *1000}
    ]);


    setInputText(" ");

  };


  function StatusHandler(e){
      setStatus(e.target.value);

  }



  return (
    <form>
      <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type = "submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select" onChange ={StatusHandler}>
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

    </form>
  );
};

export default Form;
