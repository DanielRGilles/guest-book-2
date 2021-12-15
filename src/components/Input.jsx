import React from 'react'
import { useName } from '../context/NameContext';
import { useEntry } from '../context/EntryContext';

export default function Input() {
    const { name, setName } = useName('');
    const { entry, setEntry } = useEntry([]);


    const handleSubmit = (e) => {
      e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name:</label>
          <input id='name' name='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            
            <label htmlFor='entry' >Message:</label>
          <input id='entry' name='entry' type="text" value={entry} onChange={(e) => setEntry(e.target.value)} />
          <button type='submit'>Sign Book </button>
            </form>
        </div>
    )
}
