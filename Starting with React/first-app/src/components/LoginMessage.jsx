const LoginMessage = ({ isLoggedIn }) => (
  <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
)

export default LoginMessage