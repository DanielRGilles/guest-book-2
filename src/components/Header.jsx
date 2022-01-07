import React from 'react'
import {  Link
} from "react-router-dom";
import { useName } from '../context/NameContext'


export default function Header() {
    const { name, setName } = useName();
    
    const handleClick = () => {
        setName('')
    }

    return (
        <header className='header-app'>
         
         {name ? <Link to='/guest-book' className='title-page'>Guest Book</Link>
         : <Link to='/login' className='title-page'>Guest Book</Link> }

         <main> 
         { name ? <div>Hello,  {name}</div>
                : <div> Welcome, Friend</div>} 
            </main>
            {name ? <button onClick={handleClick} className='logout-button'>Log Out</button> : null }
        </header>
    )
}
