import React, { useState } from 'react'
import Button from '../Button'

export default function AddFile({ store, setRootFolder, data, setData, setModalActiveCreateFile }) {
    const [newFiles, setNewFiles] = useState([])

    return (
        <>
            <h1 className='font-semibold text-lg'>Новый файл</h1>
            <label
                onDrop={(e) => {
                    e.preventDefault()
                    setNewFiles([...newFiles, ...e.dataTransfer.files])
                }}
                onDragOver={(e) => {
                    e.preventDefault()
                }}
                className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-gray-300 group p-4 rounded-lg justify-center cursor-pointer">
                <div className="flex flex-col justify-center items-center pt-7">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-gray-400 group-hover:text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Перетащите файлы сюда или кликните для выбора
                    </p>
                </div>
                <input
                    type="file"
                    className="opacity-0"
                    onChange={(e) => {
                        setNewFiles([...newFiles, ...e.target.files])
                    }}
                    multiple />
            </label>
            <div className='flex flex-col items-center'>
                <h2 className='font-semibold mb-3'>Выбранные файлы:</h2>
                <ul className='flex flex-col gap-2'>
                    {newFiles.length > 0 ?
                        newFiles.map(el => {
                            return <li key={el.name} className='text-gray-700 flex flex-row justify-between gap-2'>
                                {el.name}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer"
                                    onClick={() => {
                                        setNewFiles(newFiles.filter(file => file.name !== el.name))
                                    }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </li>
                        }) :
                        <li className='text-gray-700'>Ничего не выбрано</li>}
                </ul>
            </div>
            <Button
                title={'Добавить'}
                onClick={async () => {
                    setModalActiveCreateFile(false)
                    newFiles.forEach(async el => {
                        const response = await store.uploadFile(data.id, el)
                        setData(response)
                    })
                    const responseRoot = await store.viewFolder('root')
                    setRootFolder(responseRoot)
                    setNewFiles([])
                }} />
        </>
    )
}
