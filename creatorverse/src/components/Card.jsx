function Card({ name, url, description, imageURL }) {

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
        </article>
    )
}


export default Card 