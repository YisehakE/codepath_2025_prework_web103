import { useNavigate } from 'react-router-dom'

function Card({ id, name, url, description, imageURL }) {
    const navigate = useNavigate()

    const goToEdit = (e) => {
        e.stopPropagation()
        navigate(`/creator/${id}/edit`)
    }

    return (
        <article>
            {imageURL && <img src={imageURL} alt={name} />}
            <header>
                <h3>{name}</h3>
            </header>
            <p>{description}</p>
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
            >
                Visit Channel
            </a>
            <button onClick={goToEdit}>Edit</button>
        </article>
    )
}


export default Card 