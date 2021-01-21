import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const PostPage = ({post, setPost}) => {
  const location = useLocation()
  const pathname = location.pathname.split("/")[2]

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`http://localhost:4000/posts/${pathname}`)
      const postData = res.data
      setPost(postData)
    }
    fetchData()
  }, [pathname])

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  )
}

export default PostPage
