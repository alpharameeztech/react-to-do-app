import React from 'react'
import {useQuery} from "@tanstack/react-query";

export default function Reddit() {

    const {
        data: posts,
        isLoading,
        isError,
        error,
        isSuccess
    } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 6000,
    });

    function fetchPosts(){
        return fetch('https://www.reddit.com/r/aww.json').then(response =>
            response.json()
        );
    }

  return (
    <div>
        <h2>Reddit posts</h2>
        { isLoading && (
        <div>
            <p>Loading...</p>
        </div>
        )}
        {isSuccess && (
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

        { isError && (
            <div>
                <p>{error.message}</p>
            </div>
        )}
    </div>
  )
}
