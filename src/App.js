import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import data1 from './data/form-test-1.json'
import data2 from './data/form-test-2.json'
import data3 from './data/form-test-3.json'
import Button from './components/Button'

export default function App() {
    const [form, setForm] = useState(null)
    const [btn1, setBtn1] = useState(true)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)

    useEffect(() => {
        if (btn1) {
            setForm(data1)
        } else if (btn2) {
            setForm(data2)
        } else {
            setForm(data3)
        }
    }, [form, btn1, btn2, btn3])

    return (
        <div className='max-w-screen-xl mx-auto relative'>
            <div className='flex items-center gap-1 absolute top-2 left-2'>
                <a href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </a>
                <Button el={'Форма 1'} onClick={() => {
                    setBtn1(true)
                    setBtn2(false)
                    setBtn3(false)
                }} />
                <Button el={'Форма 2'} onClick={() => {
                    setBtn1(false)
                    setBtn2(true)
                    setBtn3(false)
                }} />
                <Button el={'Форма 3'} onClick={() => {
                    setBtn1(false)
                    setBtn2(false)
                    setBtn3(true)
                }} />
            </div>
            {form &&
                <div className='flex justify-center items-center h-screen'>
                    <Form data={form} />
                </div>
            }
        </div>
    )
}
