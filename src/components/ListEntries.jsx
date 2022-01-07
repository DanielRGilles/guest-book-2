import React from 'react'


export default function ListEntries({entry, name}) {
    
    return (
        <>

            { !entry ? null :
                entry.map((entr) => <div className='guest-cnt' key={entr.message}><div>{name}</div> <p className='guest-msg'>{entr.message}</p></div>)}
                
        </>
    )
}
