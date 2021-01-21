import {useState, useEffect} from 'react'
import AddPost from './components/AddPost'
import Head from './components/Head'
import Posts from './components/Posts'
import PostPage from './pages/PostPage'
import axios from 'axios'
// styles
import './style.sass'
// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom"

function App() {

  const [posts, setPosts] = useState([])
  const [post, setPost] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  useEffect( async () => {
    const data = await axios.get("http://localhost:4000/posts")
    setPosts(data.data)
  }, [])

  return (
    <Router>
      <div className="App">
        <Head
          isLogged={isLogged}
          setIsLogged={setIsLogged} />
        <Switch>
          <Route path="/" exact>
            {isLogged && (
              <AddPost
                posts={posts}
                setPosts={setPosts}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postText={postText}
                setPostText={setPostText}
              />
            )}
            <div className="posts-row">
            <Posts
              isLogged={isLogged}
              posts={posts}
              setPosts={setPosts} />
            </div>
          </Route>
          <Route path="/posts/:id" exact>
            <PostPage
              post={post}
              setPost={setPost}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
