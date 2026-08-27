import Card from './Card'

function Creator({ name, url, description, imageURL }) {
  return (
    <Card
      name={name}
      url={url}
      description={description}
      imageURL={imageURL}
    />
  )
}

export default Creator
