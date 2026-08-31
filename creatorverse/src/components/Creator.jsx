import { useNavigate } from 'react-router-dom'
import Card from './Card'

function Creator({ id, name, url, description, imageURL, onDeleted }) {
  const navigate = useNavigate()

  const goToCreator = () => {
    navigate(`/creator/${id}`)
  }

  return (
    <div onClick={goToCreator} style={{ cursor: 'pointer' }}>
      <Card
        id={id}
        name={name}
        url={url}
        description={description}
        imageURL={imageURL}
        onDeleted={onDeleted}
      />
    </div>
  )
}

export default Creator
