import useFetch from "../hooks/useFetch";

export default function Joke() {
    const {data: joke,isLoading,errorMessage} = useFetch('http://www.official-joke-api.appspot.com/jokes/random');

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
                {joke.setup + ' ' + joke.punchline}
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
