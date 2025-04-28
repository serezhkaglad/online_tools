const TodoList = ({ todos }) => (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
  
  export default TodoList