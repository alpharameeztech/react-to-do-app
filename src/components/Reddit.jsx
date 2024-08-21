import React, {useEffect, useState} from 'react'

export default function Reddit() {
    const [posts,setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        fetch('https://www.reddit.com/r/aww.json')
            .then(response => response.json())
            .then(results =>{
                setIsLoading(false)
                setPosts(results.data.children)
            })
            .catch(error =>{
                setIsLoading(false)
                setErrorMessage('Something went wrong')
            })
    }, []);
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
            {posts.map(post =>
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
