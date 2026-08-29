import { useNavigate } from 'react-router-dom'
import Card from './Card'

function Creator({ id, name, url, description, imageURL }) {
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
      />
    </div>
  )
}

export default Creator
