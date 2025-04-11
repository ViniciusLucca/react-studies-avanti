import { useState, useEffect } from 'react'

const GithubUser = () => {
    console.log('rodou github user')
    const [data, setData] = useState([])
    
    useEffect(() => {
        console.log('rodou fetch da api do github')
        fetch('https://api.github.com/users/ViniciusLucca')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    return (
    <>
        <img src={data.avatar_url} alt={data.login} />
        <p>{data.login}</p>
    </>
  )
}

export default GithubUser