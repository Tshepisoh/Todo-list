import React, {  } from "react";



const ToDoList = ({ todoList, setTodoList }) => {
  // Use useState to manage the todoList state

  //console.log(todo);

  const handleComplete = (index) => {
    // Toggle the 'completed' property of the selected todo item
    const updatedTodos = todoList.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );

    // Update the state with the new todo list
    setTodoList(updatedTodos);
  };

  const handleDelete = (index) => {
    // Deletes tasks 
    const updatedList = todoList.filter((_,i) => i !== index);
    

    // Update the state with the new todo list
    setTodoList(updatedList);
  };

  const handlePriority = (index) => {
    // moves task up depending on priority level
    
    if(index>0)
    {
      const updatedT = [...todoList];
      [updatedT[index],updatedT[index-1]]=
      [updatedT[index-1],updatedT[index]];
      setTodoList(updatedT);
    }

  };


  return (

    
    <div 
   >

      <h2
       style={{

        flex: "flex",
    
        textAlign:"center",
        fontSize:"50px",
        color:"white",
        marginTop:"30px",
       }}
      
      >My Todo List 📝</h2>
      {todoList.map((todo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            maxWidth: "50%",
            justifyContent: "space-between",
            border: "solid olive",
            padding: 12,
            marginLeft:"450px",
            marginTop:"5px",
         
            textDecoration: todo.completed ? "line-through" : "none", 
          }}
        >
          <h3 className="Form">{todo.text}</h3>

          <div>
            
          </div>
          <ol>

            <ul>

              
          <button
          className="up"
            onClick={() => handlePriority(index)}
            style={{
              flex: "flex",
              fontsize: "1.7rem",
              padding: "15px 20px",
              fontWeight:"bold",
              borderRadius: "10px",
              size: "20px",
              cursor: "pointer",
              border: 0,
              backgroundColor: "cyan",
              boxShadow: "2px 2px 0 0",
              marginLeft: "10px",
              transition:  "backgroundColor 0.5s ease",
            }}
          >
            {todo.completed ? "🚀" : "🚀"}
          </button>

          
          <button
            onClick={() => handleDelete(index)}
            style={{
              flex: "flex",
              fontsize: "1.7rem",
              padding: "15px 20px",
              fontWeight:"bold",
              borderRadius: "10px",
              size: "20px",
              cursor: "pointer",
              border: 0,
              backgroundColor: "red",
              color: "white",
              boxShadow: "2px 2px 0px 0px",
              marginLeft: "10px"
            }}
          >
            {todo.completed ? "Delete" : "Delete"}
          </button>

          
          <button
            onClick={() => handleComplete(index)}
            style={{
              flex: "flex",
              fontsize: "1.7rem",
              padding: "15px 20px",
              fontWeight:"bold",
              borderRadius: "10px",
              size: "20px",
              cursor: "pointer",
              border: 0,
              backgroundColor: "green",
              color: "white",
              boxShadow: "2px 2px 0 0",
              marginLeft: "10px"
            }}

           
          >
            {todo.completed ? "finished" : "mark as complete"}
          </button>


            </ul>

          </ol>

        </div>

      ))}
     

    </div>
  );
};

export default ToDoList;
