import Todo from "./Todo";
import { useState, useEffect } from "react";

function TodoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [
            { text: "Learn React", Completed: false },
            { text: "Learn JavaScript", Completed: false },
            { text: "Learn HTML", Completed: false },
        ];
    });

    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const AddTodo = () => {
        if (input.trim() === "") return;
        setTodos([...todos, { text: input.trim(), Completed: false }]);
        setInput("");
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].Completed = !newTodos[index].Completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"10px"
            }}>
          <div
          style={{
            

          }}
          
          >
            <input style={{
                height:"30px",
                width:"200px"
            }}
            
                type="text"
                id="todoInput"
                name="todoInput"
                value={input}
                placeholder="Add a new todo"
                onChange={(e) => setInput(e.target.value)}
            />
            </div>
            <button style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                
            }}
            onClick={AddTodo}>Add</button>
            </div>

            <div>
                {todos.length === 0 ? (
                    <p>No todos found</p>
            ) : (
                    todos.map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            index={index}
                            markComplete={markComplete}
                            deleteTodo={deleteTodo}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoList;
