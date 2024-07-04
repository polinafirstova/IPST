import React from 'react'

export default function Checkbox(props) {
    return (
        <>
            <label>{props.el.label}</label>
            {props.el.attrs.variants.map(element => {
                return <div className='flex flex-row gap-1 items-center'>
                    <input
                        id={element.value}
                        type='checkbox'
                        value={element.value}
                        name={props.el.attrs.name}
                        className='hidden' />
                    <label for={element.value} className='flex flex-row items-center cursor-pointer'>
                        <span className='flex-shrink-0 w-4 h-4 mr-2 rounded-md border border-gray-400 hover:border-gray-600 focus:outline-none focus:ring focus:ring-gray-300 transition-all duration-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3.75 stroke-2 hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                        <span className='select-none'>
                            {element.label}
                        </span>
                    </label>
                </div>
            })}
        </>
    )
}
