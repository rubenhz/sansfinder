import { useState } from 'react'
import Logo from '../assets/sansfinder-logo.png'

export default function SearchBar(props) {

    const [query, setQuery] = useState('')

    function handleChange(event) {
        setQuery(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.searchFn(
            query, 
            0, 
            props.searchResults.sortBy, 
            props.searchResults.filterStr
        )
        setQuery('')
    }

    const backgroundColor = props.tailwindBg ? 
        props.tailwindBg : 'bg-green-100'

    return (
        <form 
            className={'flex shadow-md w-full'} 
            onSubmit={handleSubmit} 
            data-testid='search-bar'
            >
            <input
                className={`
                    outline-none 
                    py-3 
                    w-full 
                    ${backgroundColor}
                    rounded-l-md
                    px-3
                `}
                type='text'
                placeholder='One Search. All Sansevieria'
                value={query}
                onChange={handleChange}
            />
            <button className={`
                flex-shrink-0 
                ${backgroundColor}
                pr-3
                rounded-r-md
                pt-[2px]
            `}>
                {/* <MagnifyingGlass /> */}
                <img 
                    src={Logo} 
                    alt="Sansfinder Logo" 
                    className="w-[30px] rounded-full"
                />
            </button>
        </form>
    )
}