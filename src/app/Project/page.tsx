import React from 'react'
import Image from 'next/image'
const Project = () => {
  return (
    <div>
      <h1 className='heading'>My Projects</h1>
      <div className='project'>
      <h2 className='pro-h2'>There are my some projects</h2>
      <p>Welcome to the Projects section!
Here, you’ll find a showcase of my latest and most exciting projects. Each project highlights my expertise in web development, design, and problem-solving. From dynamic web applications to user-friendly interfaces, these projects reflect my passion for creating innovative solutions.
Explore the portfolio to see how I transform ideas into impactful digital experiences. Whether it's building responsive websites, crafting intuitive user experiences, or developing scalable applications, every project is a step forward in my journey of continuous growth and learning.
Feel free to dive in and get inspired!</p>
      </div>
      <div className='pimg'>
      <div className='po'><h1>project-1</h1></div>
        <Image src="/images/cvpic.png" alt='img' width={300} height={225}/>
        
      </div>
      <div className='pimg'>
      <div className='po'><h1>project-2</h1></div>
        <Image src="/images/grid.png" alt='img' width={300} height={225}/>
      </div>
      <div className='pimg'>
      <div className='po'><h1>project-3</h1></div>
        <Image src="/images/pr1.png" alt='img' width={300} height={225}/>
      </div>
      <div className='pimg'>
      <div className='po'><h1>project-4</h1></div>
        <Image src="/images/pr2.png" alt='img' width={300} height={225}/>
      </div>
      <div className='pimg'>
      <div className='po'><h1>project-5</h1></div>
        <Image src="/images/pr3.png" alt='img' width={300} height={225}/>
      </div>
    </div>
  )
}

export default Project

