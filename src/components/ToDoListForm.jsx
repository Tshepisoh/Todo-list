
import React from "react";
import { useState } from "react";


const ToDoListForm = ({ setTodoList }) => {

  const [inputState, setInputState] = useState("");
  

  const handleInput = (event) => {
    setInputState(event.target.value);
  

  };

  const handleSubmit = () => {
    setTodoList((prev) => {
      return [
        ...prev,
        { id: prev.length + 1, text: inputState, completed: false },
      ];

    });

  };


  return (
    <div 


    >

      <input 

       style={{
     
        fontSize:"30px",
        borderRadius: "9PX",
        marginLeft:"700px",
        marginTop:"200px",
       }}

      
      type="placeholder" id="text"placeholder="Add new task..." onChange={handleInput} required />
      <button 

       style={{
        flex: "flex",
         fontSize:"30px",
         borderRadius: "9PX",
         backgroundColor: "green",
         color: "white",
         cursor:"pointer",
         transition:  "backgroundColor 5s",
         marginLeft:"5px",
       }} 

      
      
      onClick={handleSubmit}>Submit</button>
      
    </div>
  );
};



export default ToDoListForm;
