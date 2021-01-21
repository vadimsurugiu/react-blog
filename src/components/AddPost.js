import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const AddPost = ({posts, setPosts, postTitle, setPostTitle, postText, setPostText}) => {

  const addPost = async (e) => {
    const postId = uuidv4()
    e.preventDefault()
    setPosts([
      ...posts,
      {
        id: postId,
        title: postTitle,
        text: postText
      }
    ])
    const params = {
      id: postId,
      title: postTitle,
      text: postText
    }

    let res = await axios.post("http://localhost:4000/posts", params)
    setPostTitle('')
    setPostText('')
  }

  return (
    <form className="add-post" onSubmit={addPost}>
      <h3>Add a post</h3>
      <input
        type="text"
        placeholder="title"
        value={postTitle}
        onChange={e => setPostTitle(e.target.value)}/>
      <textarea
        cols="50"
        rows="5"
        placeholder="Type your post"
        value={postText}
        onChange={e => setPostText(e.target.value)}
      >

      </textarea>
      <button>Submit</button>
    </form>
  )
}

export default AddPost
