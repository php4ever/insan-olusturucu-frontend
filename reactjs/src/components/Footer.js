import React from 'react'

function Footer() {
    return (
        <footer className='w-full h-[50px] border-t border-gray-700 bg-gray-800 shadow flex justify-center items-center'>
            <p className='text-sm text-gray-400 flex flex-row justify-between gap-[5px]'>
                © 2023
                <a href="https://github.com/php4ever" className="hover:underline">php4ever™</a>
                . All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer