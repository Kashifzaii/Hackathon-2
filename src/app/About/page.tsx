import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className='About'>
      <h1 className="heading">About Me</h1>
            <Image src="/Images/k24.png"
            alt="photo"
            width={350}
            height={350}
            className='img1'/>

      
      <div className='about-text'>
      
      <h4>Full Stack Developer</h4>
      <p> i am a student at GIAIC, pursuing a coursein Artificial intelligence,<br/> web 3.0, & Metaverse.
        passionate aboute technology and constantly new skills<br/> to stay up-to-date with the latest innovations.
      </p>
      <a href="#" className="btn-box">More About Me</a>
      </div>
      
    





    <div>
      
        <h2 className='heading'>MY Skills</h2>
        <div>
        <h2 className='skill-h2'>HTML</h2>
        <div className='bar'></div>
        </div>
        <div>
        <h2 className='skill-h2'>CSS</h2>
        <div className='bar1'></div>
        </div>  
        <div>
        <h2 className='skill-h2'>Javascript</h2>
        <div className='bar2'></div>
        </div>
        <div>
        <h2 className='skill-h2'>Typescript</h2>
        <div className='bar3'></div>
        </div>
        <div>
        <h2 className='skill-h2'>Next.js</h2>
        <div className='bar4'></div>
        </div>
    </div>
    </section>
  )
}

export default About