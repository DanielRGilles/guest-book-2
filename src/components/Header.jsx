import React from 'react'
import { useName } from '../context/NameContext'

export default function Header() {
    const { name } = useName();    
    return (
        <header className=' header-top text-2xl m-4 space-x-4 flex-col items-center justify-self-center'>
         <h1 className='title-page'>Guest-Book </h1>
         <main> 
         { name ? <div>Hello,  {name}</div>
                : <div> Welcome, Friend</div>} 
            </main>
        </header>
    )
}
