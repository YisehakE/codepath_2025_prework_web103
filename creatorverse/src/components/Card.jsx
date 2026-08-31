import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import './Card.css'

function Card({ id, name, url, description, imageURL, onDeleted }) {
    const navigate = useNavigate()

    const goToEdit = (e) => {
        e.stopPropagation()
        navigate(`/creator/${id}/edit`)
    }

    const handleDelete = async (e) => {
        e.stopPropagation()

        const confirmed = window.confirm(`Delete ${name}? This can't be undone.`)
        if (!confirmed) return

        const { error } = await supabase.from('creators').delete().eq('id', id)

        if (error) {
            console.error(error)
            return
        }

        onDeleted?.(id)
    }

    return (
        <article className="creator-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {imageURL && <img src={imageURL} alt={name} style={{ marginBottom: '1rem' }} />}
            <header>
                <h3>{name}</h3>
            </header>
            <p
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {description}
            </p>
            <footer
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                }}
            >
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                >
                    Visit Channel
                </a>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={goToEdit}>Edit</button>
                    <button
                        className="outline"
                        onClick={handleDelete}
                        style={{ '--pico-primary': 'var(--pico-del-color)', '--pico-primary-hover': 'var(--pico-del-color)' }}
                    >
                        Delete
                    </button>
                </div>
            </footer>
        </article>
    )
}


export default Card 