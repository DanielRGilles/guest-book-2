import React from 'react'
import {  Link
} from "react-router-dom";
import { useName } from '../context/NameContext'


export default function Header() {
    const { name } = useName();    
    return (
        <header className=' header-top text-2xl m-4 space-x-4 flex-col items-center justify-self-center'>
         
         {name ? <Link to='/guest-book' className='title-page'>Guest Book</Link>
         : <Link to='/login' className='title-page'>Guest Book</Link> }

         <main> 
         { name ? <div>Hello,  {name}</div>
                : <div> Welcome, Friend</div>} 
            </main>
        </header>
    )
}
