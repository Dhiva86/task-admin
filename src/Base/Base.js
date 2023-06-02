import React from 'react'
import { useNavigate } from 'react-router-dom'



function Base({title, description, children}) {
    const navigate = useNavigate()
  return (
    <div className='main-conatainer'>
    <header>    
    <nav  class="navbar bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href=" " onClick={()=>navigate("/")}> Dashboard </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=" ">Home</a>
        </li>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Components
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href=" "  onClick={()=>navigate("/buttons")}>Button</a></li>
    <li><a class="dropdown-item" href=" " onClick={()=>navigate("/cards")}>Cards</a></li>
    
  </ul>
</div>
      </ul>
    </div>
  </div>
</nav>
    </header>
    <main>
      
       
<h3>{title}</h3>
      <h4>{description}</h4>
      <div className='contents'>
        {children}
        </div>
    </main>
    </div>
  )
}

export default Base