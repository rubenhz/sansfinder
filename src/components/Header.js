import { Link, useNavigate } from 'react-router-dom'
import LogoTransparent from '../assets/sansfinder-green-logo-transparent.png'
import { useState } from 'react'

export default function Header(props) {

    const [toggle, setToggle] = useState('h-0')

    const navigate = useNavigate()

    function toggleHeader() {
        setToggle(prev => {
            if (prev === 'h-[152px]') {
                return 'h-0'
            } else {
                return 'h-[152px]'
            }
        })
    }

    function handleLogoClicked() {
        navigate('/')
    }

    return (
        <div className={`relative flex items-center justify-between pt-5 mb-10 pb-3 border-b border-b-slate-300 mx-3 ${props.className}`}>
            <img onClick={handleLogoClicked} className='w-48 md:w-56 hover:cursor-pointer' src={LogoTransparent} alt='SansFinder logo' />
            <Links className='gap-4 hidden md:flex text-slate-600' />
            <svg onClick={toggleHeader} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 md:hidden hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className={`absolute w-full bg-white top-[69px] transition-[height] overflow-hidden ${toggle}`}>
                <Links className='flex flex-col gap-2 p-4' />
            </div>
        </div>
    )
}

function Links({className}) {
    return (
        <ul className={className}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><a href='mailto:jhdl.ruben@gmail.com'>Contact</a></li>
            <li><a href='https://www.buymeacoffee.com/rubenhenriquez' target='_blank' rel='noreferrer'>Donate</a></li>
        </ul>
    )
}