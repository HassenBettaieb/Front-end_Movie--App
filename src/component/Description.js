import React from 'react'
import Button from '@restart/ui/esm/Button';
function Description({movies,match,history}){
  const movie=movies.find(movie=>movie.id==match.params.id)
    return (
<div>
<iframe width="560" height="315"  src={movie.Trailer}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
<h1>{movie.title}</h1>
<p>{movie.description}</p>
<Button variant="primary" onClick={()=>history.goBack()} >return</Button> 
</div>

    )
    
}
export default Description ;