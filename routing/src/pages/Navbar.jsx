import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<>
<div className='w-full  h-[20vh] \-zinc-300 content-center justify-center  '>
<div className='w-full flex gap-6  bg-black justify-center content-center'>

<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to="">Home</Link> </button>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to="about">About</Link> </button>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to="contect">contect</Link> </button>
</div>
</div>
         
         
{/* <Link to="ser">Servises</Link>           */}
</>

)
}

export default Navbar