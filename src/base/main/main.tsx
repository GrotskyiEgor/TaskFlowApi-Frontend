import type { Post } from "../../data/posts";
import PostCard from "../../apps/posts/posts";

type MainProps = {
    posts: Post[]
}

function main({posts}: MainProps) {
  return (
    <main>
        <div className="main-panel">
            <h1>Добрый день</h1>
            <p>Добрый день еще раз</p>
        </div>

        <div className="post-dev-list">
            {posts.map((post) => (
                <PostCard post={post}/>
            ))}
        </div>
    </main>
  )
}

export default main
