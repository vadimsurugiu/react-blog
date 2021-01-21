import {Link} from 'react-router-dom'

const Head = ({isLogged, setIsLogged}) => {

  const loginHandler = () => {
    setIsLogged(!isLogged)
  }

  return (
    <div className="header">
      <Link to="/">
        <h1>Vadim's blog</h1>
      </Link>
      <button onClick={loginHandler}>
        {isLogged ? 'Log out' : 'Log in'}
      </button>
    </div>
  )
}

export default Head
