import Post from './Post'

const Posts = ({posts, setPosts, isLogged}) => {
  return (
    <div className="posts-row">
      {posts.slice(0).reverse().map(post => (
        <Post
          key={post.id}
          id={post.id}
          postTitle={post.title}
          postText={post.text}
          posts={posts}
          isLogged={isLogged}
          setPosts={setPosts}
          />
      ))}
    </div>
  )
}

export default Posts
