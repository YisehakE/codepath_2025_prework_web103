import { useState, useEffect } from 'react'
import Creator from '../components/Creator';

import { supabase } from "../client"

function ShowCreators() {
    const [creators, setCreators] = useState([])

    const getAllCreators = async () => {
        const { data, error } = await supabase.from('creators').select('*')
        if (error) {
            console.error(error)
            return
        }
        setCreators(data)
    }

    useEffect(() => {
        getAllCreators()
    }, [])

    return (
        <>
            <h1> Your favorite content creators</h1>
            { creators.length === 0 ? (
                <p>No content creators yet. Add one to get started!</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    { creators.map((creator) => (
                        <Creator
                            key={creator.id}
                            id={creator.id}
                            name={creator.name}
                            url={creator.url}
                            description={creator.description}
                            imageURL={creator.imageURL}
                        />
                    ))}
                </div>
            )}
        </>
  )
}

export default ShowCreators
