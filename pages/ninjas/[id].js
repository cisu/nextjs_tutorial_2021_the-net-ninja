import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}



const Details = () => {
    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}

export default Details
