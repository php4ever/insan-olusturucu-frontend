import React from 'react'

function Header({ title }) {
    return (
        <header className='w-full h-[100px] flex justify-center items-center bg-slate-900'>
            <h1 className='text-4xl text-slate-400'>{title}</h1>
        </header>
    )
}

export default Header