function Todo({todo,index,markComplete,deleteTodo}){
    return(
        <div
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"10px",
            margin:"20px 0",
            flexDirection:"row",
            borderRadius:"5px",
            border:"1px solid #ccc",
            padding:"10px",
            boxShadow:"0 2px 5px rgba(0,0,0,0.1)",
            backgroundColor:"#3a5c75ff",
            transition:"all 0.3s ease-in-out",
            cursor:"pointer",
            

        }}
        >
            <p style={{textDecoration:todo.Completed?"line-through":"none",
            color:todo.Completed?"green":"red",
            fontSize:"1.3srem",
            fontWeight:"bold",
            }}>
                {todo.text}
            </p>
             <button 

             style={{
                backgroundColor:"green",
                color:"white",
                border:"none",
                padding:"10px 20px",
                cursor:"pointer",
                borderRadius:"5px",
                
             }}
             onClick={()=>markComplete(index)}>✅</button>
            <button 
            style={{
                backgroundColor:"darkred",
                color:"white",
                border:"none",
                padding:"10px 20px",
                cursor:"pointer",
                borderRadius:"5px",
                
            }}
            onClick={()=>deleteTodo(index)}>❌</button>
        </div>
    );
}

export default Todo;