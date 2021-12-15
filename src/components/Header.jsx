import React from 'react'
import { useName } from '../context/NameContext'

export default function Header() {
    const { name } = useName();    
    return (
        <header>
         <h1>Guest-Book</h1>  
         { name ? <p>Hello,  {name}</p>
                : <p> Welcome, Friend</p>} 

        </header>
    )
}
