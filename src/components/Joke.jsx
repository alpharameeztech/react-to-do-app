import React, {useEffect, useState} from 'react'

export default function Joke() {
    const [joke,setJoke] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        fetch('http://www.official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(result =>{
                setIsLoading(false)
                setJoke(result.setup + ' ' + result.punchline)
            })
            .catch(error =>{
                setIsLoading(false)
                setErrorMessage('Something went wrong')
            })
    }, []);
  return (
    <div>
        <h2>Joke Api</h2>
        { isLoading && (
        <div>
            <p>Loading...</p>
        </div>
        )}

        {joke && (
            <p>
                {joke}
            </p>
        )}

        { errorMessage && (
            <div>
                <p>{errorMessage}</p>
            </div>
        )}
    </div>
  )
}
