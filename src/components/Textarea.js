import React from 'react'

export default function Textarea(props) {
    return (
        <div>
            <label>{props.el.label}</label>
            <textarea
                name={props.el.attrs.name}
                className='form-input mt-1 block p-1 w-full border rounded-lg border-gray-400 hover:border-gray-600 focus:outline-none focus:ring focus:ring-gray-300 transition-all duration-300'
            />
        </div>
    )
}
