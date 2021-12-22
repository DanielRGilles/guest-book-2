import React, { useState } from 'react'
import { useName } from '../context/NameContext';
import { useEntry } from '../context/EntryContext';

export default function Input() {
    const { name, setName } = useName('');
    const { entry, setEntry } = useEntry([]);
    const [ guestEntry, setGuestEntry ] = useState('');
    const [ user, setUser ] = useState('');
   
      function guestName() {
        if (!guestEntry) return
        setName(user)
        setEntry([...entry, {name: user, message: guestEntry}]);
        setGuestEntry('');
       }

    const handleSubmit = (e) => {
      e.preventDefault();
      guestName();
     
    }

    const userInput = (
      <>
        <label className='text-center' htmlFor='name' >Guest</label>
          <input className='border-4 p-1 m-3 w-full' id='name' name='name' type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      </>
    )

    return (
        <>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
           {name ? null : userInput }
            <label className='text-center' htmlFor='entry'>Entry</label>
          <input className='border-4 p-1 m-3 w-full' id='entry' name='entry' type="text" value={guestEntry} onChange={(e) => setGuestEntry(e.target.value)} />
          <button className='bg-white btn-sub p-2 rounded' type='submit'>Sign Book </button>
            </form>
            
        </>
    )
}
