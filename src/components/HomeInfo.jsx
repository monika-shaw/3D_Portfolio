import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons/index'
const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'> {text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Monika</span> 👋
            <br /> A Software Engineer from India.
        </h1>
    ),
    2: (
        <InfoBox
            text={"I've acquired a diverse set of skills through varied opportunities"}
            link="/about"
            btnText={"Learn more"}
        />
    ),
    3: (
        <InfoBox
            text={"I've played pivotal roles in numerous projects to fruition throughout my career. Interested in viewing some of my work?"}
            link="/projects"
            btnText={"Visit my portfolio"}
        />
    ),
    4: (
        <InfoBox
            text={"Seeking assistance with a project or in need of a developer? I'm merely a few keystrokes away."}
            link="/contact"
            btnText={"Lets talk !"}
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo