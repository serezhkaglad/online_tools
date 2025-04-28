import Greeting from './components/Greeting'
import ThemeToggle from './components/ThemeToggle'
import LoginMessage from './components/LoginMessage'
import TodoList from './components/TodoList'

const App = () => {
  const todos = ["Study", "Eat", "Sleep", "Walk", "Read", "Relax"]
  
  return (
  <div>
    <Greeting name="Alice" />
    <ThemeToggle />
    <LoginMessage isLoggedIn={false} />
    <TodoList todos={todos} />
  </div>
)
}

export default App