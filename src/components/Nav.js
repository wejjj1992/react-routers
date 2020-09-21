import React from'react'


function Nav(){
    return (
        <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">

        
          <li><a href ="/">Home</a></li>
          <li><a href ="/category">Category</a></li>
          <li><a href ="/products">Products</a></li>
          <li><a href ="/login">Admin area</a></li>


        </ul>
       </nav>
  )
}

export default Nav