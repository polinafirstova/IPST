import React from 'react'

export default function Select(props) {
    return (
        <div>
            <label>{props.el.label}</label>
            <select className='w-full bg-white border border-gray-400 hover:border-gray-600 p-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 transition-all duration-300'>
                {props.el.attrs.variants.map(element => {
                    return <option className='rounded-lg'>{element.label}</option>
                })}
            </select>
        </div>
    )
}
