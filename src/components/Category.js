import React from 'react'
import {Route} from 'react-router-dom'

const Category=({match})=> {
    return (
        <div>
           <ul>
           <li><a href={`${match.url}/shoes`}>Shoes</a></li>
    <li><a href={`${match.url}/boots`}>Boots</a></li>
    <li><a href={`${match.url}/footwear`}>Footwear</a></li>

           </ul>
           <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
        </div>
    )
}

export default Category