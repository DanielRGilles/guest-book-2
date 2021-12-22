import React from 'react'
import { useEntry } from '../context/EntryContext'
import { useName } from '../context/NameContext';
import ListEntries from './ListEntries'

export default function Entries() {
    const { entry } = useEntry();
    const { name } = useName();
    return (
        <div>
            <ListEntries entry={entry} name={name}/>
            
        </div>
    )
}
