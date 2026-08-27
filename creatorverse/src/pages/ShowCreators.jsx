import Creator from '../components/Creator';

function ShowCreators({ creators}) {

  return (
    <>
        <h1> Your favorite content creators</h1>  
        { creators.map((creator) => {
            return (
                <Creator 
                    name={creator.name} 
                    url={creator.url} 
                    description={creator.description} 
                    imageURL={creator.imageURL} 
                />
            )
        })}
        
    </>
  )
}

export default ShowCreators
