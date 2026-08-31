import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import { supabase } from '../client'
import Card from '../components/Card'

function ViewCreator({ onBack }) {
    const { id } = useParams()
    const [creator, setCreator] = useState({})

    const getCreator = async () => {
        const { data, error } = await supabase
            .from('creators')
            .select('*')
            .eq('id', id)
            .single()

        if (error) {
            console.error(error)
            return
        }
        setCreator(data)
    }

    useEffect(() => {
        console.log(`Creator ${id}`)
        getCreator()
    }, [])

    if (!creator) { return <p>Loading...</p>}

    return (
        <>
            <button onClick={onBack}>Back</button>
            <Card
                id={id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
                onDeleted={onBack}
            />
        </>
    )
}

export default ViewCreator
