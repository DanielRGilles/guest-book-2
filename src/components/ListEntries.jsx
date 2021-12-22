import React from 'react'


export default function ListEntries({entry}) {
    
    return (
        <>

            { !entry ? null :
                entry.map((entr) => <div className='guest-cnt' key={entr.message}><div>{entr.name}</div> <p className='guest-msg'>{entr.message}</p></div>)}
                
        </>
    )
}
