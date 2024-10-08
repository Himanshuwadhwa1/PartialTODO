export function Todos(props){
    const todos = props.todos;
    return(
        <div>
            {todos.map(function (todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                <   button>{todo.completed ? "Yes":"Mark as completed"}</button>
                </div>
            })}
        </div>
    )
}