import { useNavigate } from 'react-router-dom'
import './Card.css'

function Card({ id, name, url, description, imageURL }) {
    const navigate = useNavigate()

    const goToEdit = (e) => {
        e.stopPropagation()
        navigate(`/creator/${id}/edit`)
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
                <button onClick={goToEdit}>Edit</button>
            </footer>
        </article>
    )
}


export default Card 