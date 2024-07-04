import React from 'react'

export default function Button(props) {
    return (
        <button className='py-1 px-3 border rounded-lg border-gray-400 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring focus:ring-gray-300 transition-all duration-300'
            type={`${props.el === 'clear' ? 'reset' : props.el}`}
            onClick={props.onClick}>
            {props.el}
        </button>
    )
}
