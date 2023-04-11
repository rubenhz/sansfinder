import GreenLogo from '../assets/sansfinder-green-logo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {

    const navigate = useNavigate()

    function handleLogoClicked() {
        navigate('/')
    }

    return (
        <footer>
            <div className="bg-green-200 text-slate-600 border-t border-slate-300 mt-4 p-4 flex items-center flex-col">
                <img onClick={handleLogoClicked} className="h-10 p-1 hover:cursor-pointer" src={GreenLogo} alt='sansfinder logo' />
                <ul className="flex gap-3 mt-3">
                    <li><Link to='/about'>About</Link></li>
                    <li><a href='mailto:jhdl.ruben@gmail.com'>Contact</a></li>
                    <li><a href='https://www.buymeacoffee.com/rubenhenriquez' target='_blank' rel='noreferrer'>Donate</a></li>
                </ul>
            </div>
            <p className="bg-green-300 p-1 text-slate-500 text-center">
                © 2023 SansFinder
            </p>
        </footer>
    )
}