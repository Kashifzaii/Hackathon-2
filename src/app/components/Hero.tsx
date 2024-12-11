


import React from 'react'
 import { FaFacebookF } from "react-icons/fa";
 import { VscGithub } from "react-icons/vsc";
 import { FaWhatsapp } from "react-icons/fa";
 import { FaLinkedinIn } from "react-icons/fa";
 import { TypeAnimation } from 'react-type-animation';
 import Link from 'next/link';


const Hero = () => {
  return (
    <section className="home">
  <div className="home-content">
    <h3>Hello, Its Me</h3>
    <h1>Muhammad Kashif</h1>
    <h2>
      <TypeAnimation
        sequence={["Web Developer", 2000, "UI/UX Developer", 3000, "Frontend Developer", 3000, "Full Stack Developer", 3000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h2>
    <p>
      I am a Developer with 6 months in GIAIC. Lorem ipsum dolor sit amet,
      consectetur, modi sit quasi voluptatum. Molestiae, culpa!
    </p>
    <div className="home-sci">
      <Link href="/kashifzai165@yahoo.com"><FaFacebookF /></Link>
      <Link href="#"><VscGithub /></Link>
      <Link href="#"><FaWhatsapp /></Link>
      <Link href="#"><FaLinkedinIn /></Link>
    </div>
    <Link href="#" className="btn-box">
      More About Me
    </Link>
  </div>
  <div className="design">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</section>
  )
}

export default Hero