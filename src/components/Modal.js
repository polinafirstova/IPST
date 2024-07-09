import React from 'react'

export default function Modal({ active, setActive, children }) {
    return (
        <div className={`fixed w-full h-full bg-black bg-opacity-40 top-0 left-0 flex items-center justify-center z-10 opacity-0 pointer-events-none transition-all duration-500 ${active && 'opacity-100 pointer-events-auto'}`} onClick={() => setActive(false)}>
            <div className={`border rounded-lg border-gray-500 bg-white p-7 flex flex-col items-center gap-7 z-20 transition-all duration-300 ${active ? 'scale-100' : 'scale-0'}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div >
    )
}
