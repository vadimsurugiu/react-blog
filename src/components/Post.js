import axios from 'axios'
import { Link } from "react-router-dom"

const Post = ({postTitle, postText, isLogged, posts, setPosts, id}) => {

  const removePost = async (id) => {
    const postArray = posts.filter((post) => (post.id !== id))
    let res = await axios.delete(`http://localhost:4000/posts/${id}`)
    setPosts(postArray)
  }

  return (
    <div className="post">
      <Link to={`/posts/${id}`}>
        <strong>
          {postTitle}
        </strong>
      </Link>
      <p>{postText}</p>
      {isLogged && (
        <button onClick={() => removePost(id)}>
          🗑️
        </button>
      )}
    </div>
  )
}

export default Post
