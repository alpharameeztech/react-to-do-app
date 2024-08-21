import React from 'react'
import useFetch from "../hooks/useFetch";

export default function Reddit() {

    const {data: posts,isLoading,errorMessage} = useFetch('https://www.reddit.com/r/aww.json');

  return (
    <div>
        <h2>Reddit posts</h2>
        { isLoading && (
        <div>
            <p>Loading...</p>
        </div>
        )}
        {posts && (
        <ul>
            {posts.data.children.map(post =>
            <li>
                <a target='_blank' href={`https:reddit.com/${post.data.permalink}`}>
                    {post.data.title}
                </a>
            </li>
            )}
        </ul>
        )}

        { errorMessage && (
            <div>
                <p>{errorMessage}</p>
            </div>
        )}
    </div>
  )
}
