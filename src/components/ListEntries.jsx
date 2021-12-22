import React from 'react'


export default function ListEntries({entry}) {
    
    return (
        <div>

            { !entry ? null :
                entry.map((entr) => <div key={entr.message}><div>{entr.name}</div> <p>{entr.message}</p></div>)}
                
        </div>
    )
}
