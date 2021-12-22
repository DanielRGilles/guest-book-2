import React, { useState } from 'react'
import { useName } from '../context/NameContext';
import { useEntry } from '../context/EntryContext';

export default function Input() {
    const { name, setName } = useName('');
    const { entry, setEntry } = useEntry([]);
    const [ guestEntry, setGuestEntry ] = useState('');
    const [ user, setUser ] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
      setName(user)
      setEntry(...entry, {guestEntry})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name:</label>
          <input id='name' name='name' type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            
            <label htmlFor='entry' >Message:</label>
          <input id='entry' name='entry' type="text" value={guestEntry} onChange={(e) => setGuestEntry(e.target.value)} />
          <button type='submit'>Sign Book </button>
            </form>
        </div>
    )
}
