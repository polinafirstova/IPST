import React from 'react'
import Input from './Input'
import Button from './Button'
import Textarea from './Textarea'
import Radio from './Radio'
import Select from './Select'
import Checkbox from './Checkbox'

export default function Form(props) {
    return (
        <form className='flex flex-col gap-4 max-w-md'>
            <h1 className='font-semibold'>{props.data.title}</h1>
            <p>{props.data.description}</p>
            {props.data.fields.map(el => {
                if (el.attrs.type === 'text') {
                    return <Input el={el} key={el.attrs.name} />
                } else if (el.attrs.type === 'textarea') {
                    return <Textarea el={el} key={el.attrs.name} />
                } else if (el.attrs.type === 'radio') {
                    return <Radio el={el} key={el.attrs.name} />
                } else if (el.attrs.type === 'select') {
                    return <Select el={el} key={el.attrs.name} />
                } else if (el.attrs.type === 'checkbox') {
                    return <Checkbox el={el} key={el.attrs.name} />
                }
            })}
            <div className='flex flex-row gap-4 justify-center'>
                {props.data.buttons.map(el => {
                    return <Button el={el} key={el} />
                })}
            </div>
        </form>
    )
}