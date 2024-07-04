import React from 'react'

export default function Radio(props) {
    return (
        <div>
            <label>{props.el.label}</label>
            <div className='flex flex-row gap-4 mt-1'>
                {props.el.attrs.variants.map(element => {
                    return <div className='flex flex-row gap-1 items-center'>
                        <input
                            id={element.value}
                            type='radio'
                            value={element.value}
                            name={props.el.attrs.name}
                            className='hidden' />
                        <label for={element.value} className='flex items-center cursor-pointer'>
                            <span className='flex-shrink-0 w-4 h-4 inline-block mr-2 rounded-full border border-gray-400 hover:border-gray-600 focus:outline-none focus:ring focus:ring-gray-300 transition-all duration-300'></span>
                            <span className='select-none'>
                                {element.label}
                            </span>
                        </label>
                    </div>
                })}
            </div>
        </div>
    )
}
