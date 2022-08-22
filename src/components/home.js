import React from 'react'
import bg from '../video/forest.mp4'
const home = () => {
  return (
    <>

    <section className='middle'>
        <div className='starter'>
            <h1> Jharkhand,</h1>
            <h2>Source of Rich Minerals & Land Of Forest</h2>
            <a href='/mines'><button>Visit </button></a>
            <button>Watch Trailer</button>
        </div>
        <video className='bgvideo' autoPlay muted loop>
          <source src={bg} type="video/mp4"></source>
        </video>
    </section>
    </>
  )
}

export default home