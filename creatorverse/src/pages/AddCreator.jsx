import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { supabase } from '../client'

function AddCreator() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error } = await supabase
            .from('creators')
            .insert({ name, url, description, imageURL })

        if (error) {
            console.error(error)
            return
        }

        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    Name
                    <input
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    URL
                    <input
                        name="url"
                        placeholder="URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <input
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    ImageURL
                    <input
                        name="imageURL"
                        placeholder="ImageURL"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                </label>
            </fieldset>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                <button type="button" className="secondary" onClick={() => navigate('/')}>
                    Cancel
                </button>
                <button type="submit">Add Creator</button>
            </div>
        </form>
    )
}

export default AddCreator